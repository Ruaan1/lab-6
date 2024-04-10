const cars = require('../cars.json');
module.exports = async function (context, req) {

    context.res.json(cars);
}