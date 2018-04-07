var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

//user schema
var getUser = require('./routes/user-schema/getUser');
var loginUser = require('./routes/user-schema/loginUser');
var postUser = require('./routes/user-schema/postUser');
var blogPost = require('./routes/user-schema/blogPost');
var feed = require('./routes/user-schema/feed');
var follow = require('./routes/user-schema/follow');



var app = express();
var configDB = require('./config.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to the database

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/user/getuser',getUser);
app.use('/user/postuser',postUser);
app.use('/user/loginuser',loginUser);
app.use('/user/blogpost',blogPost);
app.use('/user/feed',feed);
app.use('/user/follow',follow);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
