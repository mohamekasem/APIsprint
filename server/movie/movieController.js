// require the model here
var Movie = require('./movieModel.js');
module.exports ={
    getAllMovies: function(req, res) {
        Movie.find({}, function(err) {
            if(err) {
                console.log('err');
            }
        })
		.then(function(data) {
    res.json(data);
});
    },

    create: function(req, res) {
        let name = req.body.name;
        let auther = req.body.auther;
        Movie.create({
            name: name,
            auther: auther,
        }, function(err, data) {
            if(err) {
                console.log('err');
            }
            res.json(data);
        });


    },
    getbyid: function(req, res) {
		// var query  = Movie.where({ _id: req.params.id });
        Movie.findOne({_id: req.params.id}, function(err, movie) {
            if (err)
                return res.send(err);
            res.json(movie);
        });
    },

// you have to use the movie model to make a new database entry

// you need to use params.id to find a movie from your database

};
