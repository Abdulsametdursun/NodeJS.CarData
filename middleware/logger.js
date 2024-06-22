module.exports = (req, res, next) => {
  console.log("middleware is running");

  // Function that runs after middleware
  next();
};
