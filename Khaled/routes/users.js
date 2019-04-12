var express = require('express');
var router = express.Router();

var Users = require('../models/user_model');
var Faculty = require('../models/faculties_model');

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

// Get route for faculties
router.get('/add_faculties', function(req, res, next) {
  res.render('add_faculties');
});

// Post route for faculties
router.post('/add_faculties', function(req, res, next) {
  var faculty_id = req.body.faculty_id;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var password = req.body.password;
  var password2 = req.body.password2;

  console.log('faculty_id: ' + faculty_id + '\n' +
              'first_name: ' + first_name + '\n' +
              'last_name: ' + last_name + '\n' +
              'password: ' + password + '\n' +
              'password2: ' + password2);
  
  // Push to database
  var query = {faculty_id:faculty_id};
  Faculty.findOneAndUpdate(query, {
    $set: {
      faculty_id:faculty_id,
      first_name:first_name,
      last_name:last_name,
      password:password
    }
  }, {
    new:true,
    upsert: true
  }, function(err, doc) {
    if(err) {console.log(err);}
  });
  
  res.redirect('/users/faculty_details');
});


router.get('/faculty_details',function(req,res,next){
  Faculty.find(function(err,results){
      if (err) return console.error(err);
      else{
        res.render('faculty_details',{info:results});
      }
    });
});
module.exports = router;
