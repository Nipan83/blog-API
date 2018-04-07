var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var config = require('../../config');
var bcrypt = require('bcryptjs');
var Blog = require('../../models/blog');

router.get('/', function(req, res, next) {

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

        Blog.getBlog(function(err, blogs) {
            if (err)
                return res.status(500).send("There was a problem finding the blogs.");
            res.json(blogs);
        })
    });
});

module.exports = router;