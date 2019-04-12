var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/collect_data', function(req, res, next) {
  res.render('collect_data');
});

router.post('/collect_data', function(req, res, next) {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  console.log('username: ' + username + '\n' +
              'email: ' + email + '\n' +
              'password: ' + password + '\n' +
              'password2: ' + password2 + '\n');

  res.send('hello');
});

module.exports = router;
