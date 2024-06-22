const http = require("http");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Hello World" }));
    }
    if (req.url === "/new" && req.method === "POST") {
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Created" }));
    }
  })
  .listen(1337, "127.0.0.1", () => {
    console.log("Server is running");
  });
