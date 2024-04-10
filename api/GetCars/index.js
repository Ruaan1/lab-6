module.exports = async function (context, req) {
    const cars = require('../cars.json');

    context.res.json(cars);
}