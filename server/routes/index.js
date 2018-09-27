var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
var saltRounds = 10;

var db = require("../models");
/* GET home page. */

router.get('/user', authenticationMiddleware (), function(req, res) {
  redirect("/user");
});

router.get("/login", function(req, res) {
  redirect("/login");
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/user",
  failureRedirect: "/login"
}))

router.get('/api/challenges', function(req, res, next) {
  const userId = 27;
  db.Challenge.findAll({
    where: {
      UserId: userId 
    }
  })
  .then(data => {
    console.log(req.user);
    console.log(req.isAuthenticated());
    console.log(data);
    res.json(data)
  }).catch(err => {
    console.log("ERROR " + err)
  })
    console.log("We are here");
});

router.post('/signup', function(req, res, next) 
{
  console.log("sanity: " + req.body.username);
  console.log("sanity: " + req.body.password);
  var password = req.body.password;
  var username = req.body.username;
  
  bcrypt.hash(password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    db.User.create({ 
    username: username, 
    password: hash
  })
  .then(result => {

    var user_id = result.id

    console.log("ID OF LAST ADDED USER: " + result.id);
    req.login(user_id, function(err) {
      res.redirect("/");
      // res.json(user_id)
    })
  })
  });
  
});


passport.serializeUser(function(user_id, done) 
{
  console.log("serialize: " + user_id)
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) 
{ 
  console.log("deserialize: " + user_id)
  done(null, user_id);
  });


  function authenticationMiddleware () {  
    return (req, res, next) => {
      console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
  
        if (req.isAuthenticated()) return next();
        res.redirect('/')
    }
  };

module.exports = router;


