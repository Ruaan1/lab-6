const cars = require('../cars.json');
module.exports = async function (context, req) {
    const newcar=req.body;
    cars.push(newcar);
    context.res.json(cars);
}