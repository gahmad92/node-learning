// const http = require ('http')
// const fs = require ('fs')
// const path = require ('path')


// http.createServer((req,res)=>{

//     let filePath

//     switch (req.url) {
//         case '/':
//             filePath = "html/index.html"
//             break;
//         case '/about':
//             filePath = "html/about.html"
//             break;
//         case '/contact':
//             filePath = "html/contact.html"

//         default:
//             res.writeHead(500,{"content-type":"text/plain"})
//             res.end("internal server error")
//             return
//     }
//     let ext = path.extname(filePath);
//     let contentType = "text/html"
//     if (ext === ".css")  contentType = 'text/css'
        
//         fs.readFile(filePath,"utf-8", (error, data)=>{
//             if (error) {
//                 res.writeHead(500,{"content-type":"text/plain"})
//                 res.end("internal server error ")
//                 return
//             }
//             res.writeHead(200,{"content-type":contentType})
//             res.end(data)
//         })
    

// }).listen(3210,()=>{

// })



const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  let filePath;

  switch (req.url) {
    case '/':
      filePath = "html/index.html";
      break;
    case '/about':
      filePath = "html/about.html";
      break;
    case '/contact':
      filePath = "html/contact.html";
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
  }

  fs.readFile("html/navbar.html", "utf-8", (err, navbar) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Failed to load navbar");
      return;
    }

    fs.readFile(filePath, "utf-8", (err, pageContent) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Failed to load page");
        return;
      }

      // Build a full HTML document dynamically
      const fullPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>My Website</title>
          <style>
            body { margin:0; font-family:Arial,sans-serif; }
            .navbar { display:flex; justify-content:space-between; align-items:center; background:#333; padding:1rem 2rem; }
            .navbar .logo { color:#fff; font-size:1.5rem; font-weight:bold; }
            .navbar .nav-links { list-style:none; display:flex; }
            .navbar .nav-links li { margin-left:1.5rem; }
            .navbar .nav-links a { color:#fff; text-decoration:none; transition:color 0.3s; }
            .navbar .nav-links a:hover { color:#f39c12; }
            section { padding:2rem; text-align:center; }
            footer { background:#333; color:#fff; text-align:center; padding:1rem; }
          </style>
        </head>
        <body>
          ${navbar}
          ${pageContent}
          <footer><p>&copy; 2025 MySite. All rights reserved.</p></footer>
        </body>
        </html>
      `;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fullPage);
    });
  });
}).listen(3210, () => {
  console.log("Server running on port 3210");
});
