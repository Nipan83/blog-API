var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
timestamp: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  authorName: {
    type: String
  }

});

var Blog = module.exports = mongoose.model('blog', blogSchema);

//Get blog
module.exports.getBlog = function(callback, limit) {
    Blog.find(callback).limit(limit);
}

//Post blog
module.exports.postBlog = function(data, callback) {
    Blog.create(data, callback);
}