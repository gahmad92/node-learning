const fs = require("fs");
const path = require("path")

const data = "testing file ..........";
const fileName = "testfile";
const filePath = path.join("text" ,fileName + ".txt");

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    // means file not exist
    fs.writeFile(filePath ,data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File created successfully");
      }
    });
  } else{
    console.log("this file already exists");
    
  }
});

fs.readFile("text/testfile.txt", "utf-8", (error, content) => {
 

  if (error) {
    return false;
  }
  console.log(data);
});

console.log("end script");
