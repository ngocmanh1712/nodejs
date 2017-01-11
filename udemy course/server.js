var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen('3333', 'localhost');
console.log('Server is listening port 3333...');