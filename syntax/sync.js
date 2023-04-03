var fs = require("fs");

//readFileSync

// console.log("A")
// var result = fs.readFileSync("/Users/hwagoon/Documents/WEB/web2/syntax/sample.txt", "utf-8");
// console.log(result);
// console.log("C")

//readFile
console.log("A");
fs.readFile(
  "/Users/hwagoon/Documents/WEB/web2/syntax/sample.txt",
  "utf-8",
  function (err, result) {
    console.log(result);
  }
);
console.log("C");
