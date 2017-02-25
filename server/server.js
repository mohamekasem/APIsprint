//require express and mongoose here
var mongoose = require('mongoose');
var express = require('express');
//require your middleware and routes here
app = express();
require('./config/middleware.js')(app,express)
require('./config/routes')(app,express)

//=============================================================================
/*									Database								 */
//=============================================================================

	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected
mongoose.connect("mongodb://kaka1:123@ds153709.mlab.com:53709/my_db");


//=============================================================================
/*									Server   								 */
//=============================================================================
// app.get('/users',function(req,res){
// 	res.send('ok')
// })
//set express to listen to for requests or certain port

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
})


module.exports=  app