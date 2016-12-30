var fs = require("fs");
var content = fs.readFileSync(__dirname + "/list.txt");
console.log(content);
console.log(content.toString());