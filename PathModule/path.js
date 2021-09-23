const path = require("path");
console.log(path.dirname("C:\Users\ANANT VERMA\NodeJs\PathModule\path.js"));
console.log(path.extname("C:\Users\ANANT VERMA\NodeJs\PathModule\path.js"));
console.log(path.basename("C:\Users\ANANT VERMA\NodeJs\PathModule\path.js"));


const myPath = path.parse("C:\Users\ANANT VERMA\NodeJs\PathModule\path.js");

console.log(myPath.name);
console.log(myPath.root);
