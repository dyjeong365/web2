import { readFile } from "node:fs";

readFile(
  "/Users/hwagoon/Documents/WEB/web2/node.js/sample.txt",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
