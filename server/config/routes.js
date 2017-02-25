//you need to require some files here
movieController = require('../movie/movieController.js');
carController = require('../car/CarController.js');

console.log('im hon')
module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
app.get('/api/movie/', movieController.getAllMovies);
app.get('/api/movie/:id', movieController.getbyid);
app.post('/api/movie/', movieController.create);
//=============================================================================
/*								book route									 */
//=============================================================================
app.get('/api/car/', carController.getAllCars)
app.post('/api/car/', carController.addCar);
app.get('/api/car/:id',carController.getbyid)
};

