const path = require('path')
const file= "files/peter.txt"

console.log(path.basename(file));

console.log(path.resolve("files","peter.txt"));
 
console.log(__dirname);
console.log(__filename);


