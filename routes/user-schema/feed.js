var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var config = require('../../config');
var bcrypt = require('bcryptjs');
var Blog = require('../../models/blog');
var User = require('../../models/user');

router.get('/', function(req, res, next) {
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

        console.log(decoded);
        if (err)
            return res.status(500).json({
                auth: false,
                message: 'Failed to authenticate token.'
            });
        //this user is the previous user from cache
        User.findOne({_id: user._id},function(err,user){
            console.log(user);

            if (err) throw err;

            Blog.find({ authorId: { $in: user.followed}} , function(err,blogs) {

            if (err)
                return res.status(500).send("There was a problem finding the blogs.");
            res.json(blogs);
        });
        });


        
});
 });

module.exports = router;