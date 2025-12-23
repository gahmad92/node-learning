const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("html/header.html", "utf-8", (err, headerData) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("internal server error (header)");
        return;
      }
      fs.readFile("html/index.html", "utf-8", (err, indexData) => {
        if (err) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.end("internal server error (index)");
          return;
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.end(headerData + indexData);
      });
    });
  } else if (req.url === "/style.css") {
    fs.readFile("html/style.css", "utf-8", (err, cssData) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("failed to load css");
        return;
      }
      res.writeHead(200, { "content-type": "text/css" });
      res.end(cssData);
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 not found");
  }
}).listen(3210, () => {
  console.log("server running on port 3210");
});
