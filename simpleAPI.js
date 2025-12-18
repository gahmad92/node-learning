const http = require('http');
    const usersData = [
        {
            name:'anil',
            age:'30',
            email:'text@test.com'
        },
        {
            name:'Sam',
            age:'20',
            email:'text@test.com'
        },
        {
            name:'Ben',
            age:'40',
            email:'text@test.com'
        }
    ]



http.createServer((req,res)=>{
    res.setHeader("Content-Type",'application/json')
    res.write(JSON.stringify(usersData))
    res.end();
    
}).listen(6100)