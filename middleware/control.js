const fs = require("fs");

// Import car data
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf8")
);

module.exports = (req, res, next) => {
  // get car id from url params
  const carId = Number(req.params.id);
  const found = cars.find((car) => car.id === carId);

  // if car is not found, return 404 error
  if (!found) {
    return res.status(404).json({
      message: "Car not found",
    });
  }

  req.car = found;

  // if car is found, move to next middleware
  next();
};
