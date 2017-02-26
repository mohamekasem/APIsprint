// require files here
var Car = require('./CarModel.js');

module.exports ={
    addCar: function(req, res) {
        let body = req.body;

        for(let i = 0; i < body.length; i++) {
            let car = body[i].name;
            let color = body[i].color;
            let price = body[i].price;

            let MyCar = Car.create({
                name: car,
                color: color,
                price: price,
            }, function(err) {
                if(err) {
                    console.log('errrrrr');
                }
            });
        }
		
        res.send('helllo');
    },
    getAllCars: function(req, res) {
		
        Car.find({}, function(err) {
            if(err) {
                console.log('err');
            }
        })
		.then(function(data) {
    res.json(data);
});
    },
    getbyid: function(req, res) {
        let query = Car.where({_id: req.params.id});
        query.findOne(function(err, car) {
            if (err)
                return res.send(err);
            res.json(car);
        });
    },
};
