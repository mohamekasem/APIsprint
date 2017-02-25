var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
	name : String,
	color :String,
	price:String
});

var Car = mongoose.model('Car', CarSchema);

module.exports = Car; 