const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/new", (req, res) => {
  res.res(201).json({ message: "Created" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
