var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
// 	// Comment out this line:
//   //res.send('respond with a resource');
//   Users.create({ username: req.body.username, password: req.body.password })
//   .then(() => Users.findOrCreate({where: {username: req.body.username}}))
//   .spread((user, created) => {
//     console.log(user.get({
//       plain: true
//     }))
//     console.log(created)
//   }) 
// });

module.exports = router;
