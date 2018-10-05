var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
var saltRounds = 10;

var db = require("../models");
/* GET home page. */

let activeId;

router.get('/user', authenticationMiddleware(), function (req, res) {
  console.log("WE BE IN USER");
  redirect("/user");
});


router.get("/login", function (req, res) {
  redirect("/");
});

router.get("/challenge", function (req, res, next) {
  const challengeId = 5;
  db.Location.findAll({
    where: {
      ChallengeId: challengeId
    }
  })
    .then(data => {
      console.log(data);
      res.json(data)
    }).catch(err => {
      console.log("ERROR: " + err)
    })
  console.log("LOCATIONS FOR CHALLENGES")
})
// ==================================================
// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/user",
//   failureRedirect: "/login"
// }))

router.post("/login", passport.authenticate("local"), function (req, res) {
  var user = req.user;
  console.log("The User " + user);
  db.User.findOne({
    where: {
      id: user
    }
  }).then(function (dbUser) {
    activeID = dbUser.id;
    console.log("here is active id" + activeId);
    res.json("/");
  })
    .catch(err => {
      console.log(err);
    })
});



// ============== PULLS CHALLENGE NAMES BASED ON USER =============== \\
router.get('/api/challenges', function (req, res, next) {
  const userId = req.user;
  console.log("SHOULD BE LOGGED IN USER: " + userId);
  db.Challenge.findAll({
    where: {
      UserId: userId
    }
  })
    .then(data => {
      // console.log(req.user);
      // console.log(req.isAuthenticated());
      console.log(data);
      res.json(data)
    }).catch(err => {
      console.log("ERROR " + err)
    })
  
});

// ================== PULLS LOCATION DATA BASED ON CHALLENGE ============== \\
router.get('/challenges', function (req, res, next) {
  const challengeId = 3;
  db.Location.findAll({
    where: {
      ChallengeId: challengeId
    }
  })
    .then(data => {
      console.log(data);
      res.json(data)
    }).catch(err => {
      console.log("ERROR " + err)
    })
  console.log("Over here now");
});
// ================= POST TO REGISTER USER ================\\
router.post('/signup', function (req, res, next) {
  console.log("sanity: " + req.body.username);
  console.log("sanity: " + req.body.password);
  var password = req.body.password;
  var username = req.body.username;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    db.User.create({
      username: username,
      password: hash
    })
      .then(result => {

        var user_id = result.id;

        console.log(req.user);
        console.log(req.isAuthenticated());
        console.log("ID OF LAST ADDED USER: " + result.id);
        // req.login(user_id, function (err) {
        // //   res.redirect("/");
        // })
        res.json({
          status: 200,
          message: "signup successful"
        })
      })
  });
});

// ================== AUTHENTICATION STUFF =================== \\
passport.serializeUser(function (user_id, done) {
  console.log("serialize: " + user_id)
  done(null, user_id);
});

passport.deserializeUser(function (user_id, done) {
  console.log("deserialize: " + user_id)
  done(null, user_id);
});


function authenticationMiddleware() {
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

    if (req.isAuthenticated()) return next();
    res.redirect('/')
  }
};

module.exports = router;


