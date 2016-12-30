var express = require("express");
var app = express();

app.listen(3000);
// add engine ejs to render view
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
    res.send("AAAA");
})