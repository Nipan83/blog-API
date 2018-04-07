var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config');
var Blog = require('../../models/blog');
var User = require('../../models/user');



/* POST route to register user in the app. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    
  
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.create({
    username : req.body.username,
    email : req.body.email,
    password : hashedPassword,
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    blogURL : req.body.blogURL
  },
  function (err, user) {
    console.log(user);

    if (err) return res.send(err);
        

    res.status(200).json({message: "successfully registered!" });

  }); 
});




module.exports = router;