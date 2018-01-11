var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    text: String,
    date: Date,
});

module.exports = mongoose.model('CapstoneBlog', blogSchema);