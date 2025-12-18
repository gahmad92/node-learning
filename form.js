

//------------------------------------------------------------------------

const http = require ('http')

const fs = require ('fs').promises
const queryString = require("querystring")

http.createServer(async(req,res)=>{

  if (req.url==="/" && req.method === "GET") {
    try {
      const data = await fs.readFile("html/index.html", "utf-8")
      res.writeHead(200,{"content-type":"text/html"})
      res.end(data)
    } catch (err) {
      res.writeHead(500,{"content-type":"text/plain"})
      res.end("internal server error")
    }
  }
  else if (req.url === "/submit" && req.method ==="POST") {
    let dataBody = []
    req.on("data",(chunk)=>{
      dataBody.push(chunk)
    })

    req.on("end",async()=>{
      let rawData=  Buffer.concat(dataBody).toString();
      let readableData = queryString.parse(rawData)
      console.log("Name " +readableData.name);
      console.log("email " +readableData.email);
      // making text file for the information 
    let dataString = (`my name is ${readableData.name} and my email is ${readableData.email} `);
   
    try {
      await fs.writeFile("text/"+readableData.name+".txt", dataString)
      console.log("file created successfully");
      
    } catch (error) {
      res.writeHead(500,{"content-type":"text/plain"})
      res.end("internal server error")
      return
    }

    

      res.writeHead(200, {"content-type":"text/html"})
      res.end(`
        <h1>name and email information </h1>
        <p>Name ${readableData.name}</p>
        <p>Email ${readableData.email}</p>
         <a href="/">Back</a>
        `)
      
    })
  } else {
    res.writeHead(404,{"content-type":"text/plain"})
    res.end("not found")
  }
}).listen(3300,()=>{
  console.log("server running on port 3300");
 
  
})