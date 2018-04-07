var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var config = require('../../config');
var bcrypt = require('bcryptjs');
var User = require('../../models/user');

router.put('/:username', function(req, res, next) {

    
    username = req.params.username;
    console.log(username);
    var user = req.cookies.user;
    console.log(user);
    var id = user._id;
    var token = req.headers['x-access-token'];
    console.log(token);
    
    
     if (!token)
         return res.status(401).json({
             auth: false,
             message: 'No token available.'
         });

     jwt.verify(token, config.secret, function(err, decoded) {

        if (err)
            return res.status(500).json({
                auth: false,
                message: 'Failed to authenticate token.'
            });

        var followedId;

        User.findUser(username, function(err,user){
            
            if(err) throw err;
            if(!user) return res.status(404).json({message:'No username found.'});
            followedId = user._id;

            User.update({_id:id},
            {
                $push:{
                    followed: followedId
                }
            },function(err, user){
                if(err) return res.status(500).json({message:"There was a problem finding the user"});
                //this is not that user

                res.json(user)
            }

                )


        })

    });
});

module.exports = router;