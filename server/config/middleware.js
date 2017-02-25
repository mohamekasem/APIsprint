//require some files here
var morgan = require('morgan')
var bodyParser = require('body-parser');
var express = require('express')
console.log('im in med')
module.exports = function (app, express) {
	// app.use(bodyParser());	
	app.use(morgan('dev'))
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + "../client"));
  //use middleware to provide concise output colored by response status for development use 
  //use middleware that only parses urlencoded bodies. This parser accepts only UTF-8 encoding of the body.
  //	
  //use the built in middleware to serve static files such as images, CSS files, and JavaScript files.
};
