var http = require("http");
var fs = require("fs");
http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    fs.createReadStream(__dirname + "/list.txt").pipe(res);
}).listen(8888);
http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    var obj = {
        firstName: "Luu",
        lastName: "Manh",
        age: 23
    };
    res.end(JSON.stringify(obj));
}).listen(7777);