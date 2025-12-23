const http = require ('http')
const fs = require ('fs')
const path = require ('path')


http.createServer((req,res)=>{

    let filePath

    switch (req.url) {
        case '/':
            filePath = "html/index.html"
            break;
        case '/about':
            filePath = "html/about.html"
            break;
        case '/contact':
            filePath = "html/contact.html"

        default:
            res.writeHead(500,{"content-type":"text/plain"})
            res.end("internal server error")
            return
    }
    let ext = path.extname(filePath);
    let contentType = "text/html"
    if (ext === ".css")  contentType = 'text/css'
        
        fs.readFile(filePath,"utf-8", (error, data)=>{
            if (error) {
                res.writeHead(500,{"content-type":"text/plain"})
                res.end("internal server error ")
                return
            }
            res.writeHead(200,{"content-type":contentType})
            res.end(data)
        })
    

}).listen(3210,()=>{

})