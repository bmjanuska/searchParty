// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var bodyParser = require('body-parser');
// var Sequelize = require('sequelize');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var app = express();
// var PORT = 3001;
// var db = require("./models");
// // ========= authentication==========

// var session = require('express-session');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

// var MySQLStore = require('express-mysql-session')(session);
// var bcrypt = require("bcrypt");

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()); 


// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


// app.use(passport.initialize());
// app.use(passport.session());

// var options = {
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'lost_and_found_development'
// };

// var sessionStore = new MySQLStore(options);

// app.use(session({
//   // each cookie signed with secret string
//   secret: 'hfksdhflashdfil',
//   store: sessionStore,
//   //update the session on each reload? nope
//   resave: false,
//   //create cookie fo rusers not logged in? nope
//   saveUninitialized: false,
//   // cookie: { secure: true }
// }))



// app.use(indexRouter);
// app.use(usersRouter);

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     console.log(username)
//     console.log(password)
  
//     db.User.findOne({
//       where: {
//         username: username
//       }
//     }).then(results => {
//       console.log(results.username);
//       console.log(results.password);
    
//       if (results.length === 0) {
//         {done(null, false)}
//       }
//       console.log(results.password.toString());
//       var hash = results.password.toString()
//       bcrypt.compare(password, hash, function(err, res) {
//         if (res === true) {
//           console.log("logged in now")
//           return done (null, {user_id: results.id})
//         } else {
//           return done(null, false)
//         }
//       });

      
//     })
//   }
// ));

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



// var syncOptions = { force: true };

// var sequelize = new Sequelize('lost_and_found_development', 'root', 'root', {
//   host: '127.0.0.1',
//   username: 'root',
//   password: 'root',
//   dialect: 'mysql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }

// });

// sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('UNABLE TO CONNECT TO DATABASE:', err);
//   });
// module.exports = app;


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

const PORT = process.env.PORT || 3001;
var app = express();

// Requiring our models for syncing
var db = require("./models");

/*========= Here we want to let the server know that we should expect and allow a header with the content-type of 'Authorization' ============*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

/*========= This is the typical node server setup so we can be able to parse the requests/responses coming in and out of the server ============*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

/*========= Here we will set up an express jsonwebtoken middleware(simply required for express to properly utilize the token for requests) You MUST instantiate this with the same secret that will be sent to the client ============*/
const jwtMW = exjwt({
  secret: 'keyboard cat 4 ever'
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    db.user.create({
      username: username,
      password: hash
    }).then((result) => {
      console.log("User created: ", result);
      res.json("user created!");
    })
  });
})

/* This is SUPER important! This is the route that the client will be passing the entered credentials for verification to. If the credentials match, then the server sends back a json response with a valid json web token for the client to use for identification. */
app.post('/log-in', (req, res) => {
  const { username, password } = req.body;
  console.log("User submitted: ", username, password);

  db.user.findOne(
    {
      where: { username: username }
    })
    .then((user) => {
      console.log("User Found: ", user);
      if (user === null) {
        res.json(false);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          console.log("Valid!");
          let token = jwt.sign({ username: user.username }, 'keyboard cat 4 ever', { expiresIn: 129600 }); // Signing the token
          res.json({
            sucess: true,
            err: null,
            token
          });
        }
        else {
          console.log("Entered Password and Hash do not match!");
          res.status(401).json({
            sucess: false,
            token: null,
            err: 'Entered Password and Hash do not match!'
          });
        }
      });
    })
});


app.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
  console.log("Web Token Checked.")
  res.send('You are authenticated'); //Sending some response when authenticated
});

db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
})


module.exports = app;
