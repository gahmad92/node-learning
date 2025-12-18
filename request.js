const express = require('express')
const app = express()

// the route
app.get("/",(req,res)=>{
    res.send("<h2>route of homepage page</h2>")
})

app.get("/contact",(req,res)=>{
    res.send("<h2>it is contact page</h2>")
})

app.listen(3000,()=>{
    console.log("running on port 3000");
    
})
