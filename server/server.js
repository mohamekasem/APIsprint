let mongoose = require('mongoose');
var express = require('express');
var app = express();
require('./config/middleware.js')(app, express);
require('./config/routes')(app, express);
mongoose.connect('mongodb://kaka1:123@ds153709.mlab.com:53709/my_db');

app.listen(3000, function() {
    console.error('Example app listening on port 3000');
});


module.exports = app;
