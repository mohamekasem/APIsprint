// you need to require some files here
let movieController = require('../movie/movieController.js');
let carController = require('../car/CarController.js');

console.log('im hon');
module.exports = function(app) {
// =============================================================================
/*								movie route									 */
// =============================================================================
    app.get('/api/movie/', movieController.getAllMovies);
    app.post('/api/movie/', movieController.create);
    app.get('/api/movie/:id', movieController.getbyid);

// =============================================================================
/*								book route									 */
// =============================================================================
    app.get('/api/car/', carController.getAllCars);
    app.post('/api/car/', carController.addCar);
    app.get('/api/car/:id', carController.getbyid);
};

