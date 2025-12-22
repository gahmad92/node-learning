const fs = require('fs')

const operation = process.argv[2]

if (operation === "write") {
    const name = process.argv[3]
    const content = process.argv[4]

    console.log(operation,name,content);
    
    fs.writeFileSync("files/" + name + ".txt",content, {encoding:"utf8"})

    console.log("file created successfully");
    
}