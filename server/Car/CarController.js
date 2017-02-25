//require files here
Car = require('./CarModel.js');

module.exports ={
	addCar : function (req, res) {
		var body = req.body;

		for(var i = 0;i < body.length; i++){
			var car = body[i].name;
			var color = body[i].color;
			var price = body[i].price;

			var MyCar = Car.create({
				name: car,
				color: color,
				price: price
			},function(err){
				if(err){
					console.log('errrrrr')
				}
			})
		}
		
		res.send('helllo')
	},
	getAllCars : function (req, res){
		
		Car.find({},function(err){
			if(err){
				console.log('err')
			}
		})
		.then(function(data){
			res.json(data)
		})
	},
	getbyid: function(req,res){
		var query  = Car.where({ _id: req.params.id });
		query.findOne(function (err, car) {
			if (err)
				return res.send(err)
			res.json(car);
		});
	}
				// console.log(req.body)
			// Car.find({},function(err,data){
			// 	console.log(data)
   //    			if(err){
   //    				console.log('err')
   //    			}else{
   //    				res.json(data)
			//console.log(req.params.id,'jioiuhih')
   //    			}

			// })
	//console.log(MyCar,'im MyCar')
			// .then(function(data){
			// })
//you have to use the books model to make a new database entry 

//you need to use params.id to find a books from your database

}