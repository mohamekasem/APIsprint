let mongoose = require('mongoose');

let CarSchema = new mongoose.Schema({
    name: String,
    color: String,
    price: String,
});

let Car = mongoose.model('Car', CarSchema);

module.exports = Car;