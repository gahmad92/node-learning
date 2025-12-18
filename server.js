const http = require('http')

http.createServer((req,res)=>{
    res.write("<h2>hi from haider</>h2")
    res.end("hello code step by step")

}).listen(4700)