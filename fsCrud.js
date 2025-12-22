const fs = require('fs');
const { argv } = require('process');

const operation = process.argv[2]

if (operation === "write") {
    const name = process.argv[3]
    const content = process.argv[4]

    console.log(operation,name,content);
    
    fs.writeFileSync("files/" + name + ".txt",content, {encoding:"utf8"})

    console.log("file created successfully");
    
}
else if (operation ==="read") {
    const name  = process.r=argv[3]
    const fullName = "files/"+name+".txt"
    let data = fs.readFileSync(fullName,"utf8")

    console.log(data);
    
}
else if (operation === "update") {
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/"+name+".txt"

    let data = fs.appendFileSync(fullName,content)
    console.log(data);
    
} else if (operation === "delete") {
    const name  = process.argv[3]
    const fullName = "files/"+name+".txt"
    fs.unlinkSync(fullName)

}