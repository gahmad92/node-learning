

const http = require("http");
const userForm = require("./userForm");
const userDataSubmit = require("./userDataSubmit");

http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });

  if (req.url === "/") {
    userForm(req, res); // ends response inside
  } else if (req.url === "/submit") {
    userDataSubmit(req, res); // ends response inside
  } else {
    res.end("<h1>404 Not Found</h1>");
  }
}).listen(3500, () => {
  console.log("server running on port 3500");
});
