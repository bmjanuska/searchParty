var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var db = require('./models')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
var PORT = 3001;

// ========= authentication==========

var session = require('express-session');
var passport = require('passport');
var MySQLStore = require('express-mysql-session')(session);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());
app.use(passport.session());

var options = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'lost_and_found_development'
};

var sessionStore = new MySQLStore(options);

app.use(session({
  secret: 'hfksdhflashdfil',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }
}))

app.use(indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



var syncOptions = { force: true };

var sequelize = new Sequelize('lost_and_found_development', 'root', 'root', {
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});

sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('UNABLE TO CONNECT TO DATABASE:', err);
  });
module.exports = app;


