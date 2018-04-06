const bodyParser = require("body-parser");
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config');

router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());

var User = require('../../models/user');


/* POST route to get all user in the app. */
router.post('/', function(req, res) {
  
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
    if (err) return res.status(500).json("There was a problem registering the user.")

    res.status(200).json({message: "successfully registered!" });
  }); 
});

module.exports = router;