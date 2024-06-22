const fs = require("fs");
const crypto = require("crypto");
const write = require("../utils/write");

// Import car data
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf8")
);

// Function to get all car data
exports.getAllCars = (req, res) => {
  res.status(200).json({
    message: "All cars data fetched successfully",
    results: cars.length,
    cars,
  });
};

// Function to add new car data
exports.createCar = (req, res) => {
  // add id to new car data
  const newCar = { ...req.body, id: crypto.randomUUID() };

  // add car data to cars array
  cars.push(newCar);

  // write new cars array to cars.json file
  write(cars);
  res.status(200).json({
    message: "Car created successfully",
    car: newCar,
  });
};

// Middleware to get car by id
exports.getCarById = (req, res, next, id) => {
  const car = cars.find((car) => car.id === id);
  if (!car) {
    return res.status(404).json({
      message: "Car not found",
    });
  }
  req.car = car;
  next();
};

// Function to get car data by id
exports.getCar = (req, res) => {
  res.status(200).json({
    message: "Cars data fetched successfully",
    car: req.car,
  });
};

// Function to delete car data by id
exports.deleteCar = (req, res) => {
  // Delete car data from cars array
  cars = cars.filter((car) => car.id !== req.car.id);

  // write new cars array to cars.json file
  write(cars);

  res.status(204).json({
    message: "Car deleted successfully",
  });
};

// Function to update car data by id
exports.updateCar = (req, res) => {
  // get the data from request body
  const updatedData = req.body;

  // Create a new car object by new data
  const updateCar = { ...req.car, ...updatedData };

  // Find the index of the car in cars array
  const index = cars.findIndex((car) => car.id === req.car.id);

  // Put the new car object in cars array at the index
  cars.splice(index, 1, updateCar);

  // update the car data in cars.json file
  write(cars);

  // send the updated car data to the client
  res.status(200).json({
    message: "Car updated successfully",
    car: updateCar,
  });
};
