var express = require('express');
var router = express.Router();

var db = require("../models");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/signup', function(req, res, next) 
{
  console.log("sanity: " + req.body.username);
  db.Users.create({ 
    username: req.body.username, 
    password: req.body.password 
  })
  .then(function(dbUser) {
    res.json(dbUser);
  })
  
  
  
  // .then(() => db.Users.findOrCreate({where: {username: req.body.username}}))
  // .spread((user, created) => {
  //   console.log(user.post({
  //     plain: true
  //   }))
  //   console.log(created)
  // }) 
});

module.exports = router;
