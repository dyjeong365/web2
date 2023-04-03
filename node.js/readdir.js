var testFolder = "/Users/hwagoon/Documents/WEB/web2/data";
var fs = require("fs");

fs.readdir(testFolder, function (error, filelist) {
  console.log(filelist);
});
