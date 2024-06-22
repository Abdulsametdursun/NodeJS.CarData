// import express from "express";
const express = require("express");
const {
  createCar,
  getAllCars,
  updateCar,
  deleteCar,
  getCar,
} = require("./controllers/carController");
const logger = require("./middleware/logger");
const control = require("./middleware/control");

// setup express
const app = express();
const port = 3000;

// Middleware
// Function that between request and response
app.use(logger);

// Edit json data come to body
app.use(express.json());

// // define routes/endpoints
// app.get(`/api/v1/cars`, getAllCars);
// app.post(`/api/v1/cars`, createCar);
// // Edit data by id
// app.get(`/api/v1/cars/:id`, getCar);
// app.patch(`/api/v1/cars/:id`, updateCar);
// app.delete(`/api/v1/cars/:id`, deleteCar);

// Fast way to define routes and edit data by id
app.route(`/api/v1/cars`).get(getAllCars).post(createCar);

app
  .route(`/api/v1/cars/:id`)
  .get(control, getCar)
  .patch(control, updateCar)
  .delete(control, deleteCar);

// listen on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
