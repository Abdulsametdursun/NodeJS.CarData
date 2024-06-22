const fs = require("fs");

module.exports = (data) => {
  fs.writeFile(
    `${__dirname}/../data/cars.json`,
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.log("There is an error in writing data to file");
        console.log(err);
      }
      return;
    }
  );
};
