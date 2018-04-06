var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	timestamp: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  blogURL: {
  	type: String
  }
    
});

var User = module.exports = mongoose.model('user', userSchema);

//Get user
module.exports.getUser = function(callback, limit) {
    User.find(callback).limit(limit);
}

//Post user
module.exports.postUser = function(data, callback) {
    User.create(data, callback);
}


//login user
module.exports.loginCreche = function(id, callback) {
    User.findOne({ "email": id }, callback);
}