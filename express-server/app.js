var express = require("express");
var app = express();

var server = require("http").createServer(app);
server.listen(8888);

app.get("/", function (req, res) {
    // res.send("<h1>Hello world</h1>");
    res.sendFile(__dirname + "/index.html");
});

app.get("/abc/:param1/:param2", function (req, res) {
    var result = parseInt(req.params.param1) + parseInt(req.params.param2);
    res.send("Result: " + result);
}); 