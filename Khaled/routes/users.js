var express = require('express');
var router = express.Router();

var Users = require('../models/user_model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/add_students', function(req, res, next) {
  res.render('add_students');
});

router.post('/add_students', function(req, res, next) {
  var std_id = req.body.std_id;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var password = req.body.password;
  var password2 = req.body.password2;

  console.log('std_id: ' + std_id + '\n' +
              'first_name: ' + first_name + '\n' +
              'last_name: ' + last_name + '\n' +
              'password: ' + password + '\n' +
              'password2: ' + password2);
  var query = {std_id:std_id};

  Users.findOneAndUpdate(query, {
    $set: {
      std_id:std_id,
      first_name:first_name,
      last_name:last_name,
      password:password
    }
  }, {
    new: true,
    upsert: true
  }, function(err, doc) {if(err) {console.log(err)}});

  res.redirect('/users/student_details');
});

// Get method for teacher
router.get('/student_details',function(req,res,next){
	Users.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('student_details',{info:results});
    	}
  	});
});

module.exports = router;
