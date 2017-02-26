// implement model here
var mongoose = require('mongoose');

let movieSC = new mongoose.Schema({
    name: String,
    auther: String,

});

let movie = mongoose.model('movie', movieSC);

module.exports = movie;