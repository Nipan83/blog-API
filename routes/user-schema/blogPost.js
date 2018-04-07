var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var config = require('../../config');
var bcrypt = require('bcryptjs');
var User = require('../../models/user');
var Blog = require('../../models/blog');


/*
    Post route for posting blog
    
    Authentication is handled using JWT.

    Token will be needed for posting a blog which
    will be provided in login
*/
router.post('/', function(req, res, next) {
    
    console.log(req.cookies.user);
    var user = req.cookies.user;
    if(!user) return res.status(404).json({message:"no cookies available! Please Login"});
    
    
    var token = req.headers['x-access-token'];
    console.log(token);

     if (!token)
         return res.status(401).json({
             auth: false,
             message: 'No token available.'
         });

     jwt.verify(token, config.secret, function(err, decoded) {

        Blog.create({
            title : req.body.title,
            content : req.body.content,
            authorId : user._id,
            authorName : user.username
                    },
  function (err, blog) {
    if (err) return res.status(500).json("There was a problem posting the blog.")

    res.status(200).json({message: "successfully posted!" });
    console.log(blog);
  }); 
    });
});

module.exports = router;