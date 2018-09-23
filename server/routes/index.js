var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) 
{
  console.log("sanity");
  Users.create({ username: req.body.username, password: req.body.password })
  .then(() => User.findOrCreate({where: {username: req.body.username}}))
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created)
  }) 
});

module.exports = router;
