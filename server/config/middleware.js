// require some files here
let morgan = require('morgan');
let bodyParser = require('body-parser');
let express = require('express');
console.log('im in med');
module.exports = function(app) {
	// app.use(bodyParser());
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '../../client'));
  // use middleware to provide concise output colored by response status for development use
  // use middleware that only parses urlencoded bodies. This parser accepts only UTF-8 encoding of the body.
  //
  // use the built in middleware to serve static files such as images, CSS files, and JavaScript files.
};
