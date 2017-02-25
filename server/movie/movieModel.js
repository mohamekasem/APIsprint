//implement model here
var mongoose = require('mongoose');

var movieSC = new mongoose.Schema({
	name:String,
	auther:String

});

var movie = mongoose.model('movie', movieSC);

module.exports = movie; 