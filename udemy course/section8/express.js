var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.send("<h1>manhmaluc2</h1>");
});

app.listen(port);