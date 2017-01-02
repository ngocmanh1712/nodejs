var fs = require('fs');
var zlib = require('zlib');

var reable = fs.createReadStream(__dirname + '/greet.txt',
    { encoding: 'utf-8', highWaterMark: 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzfile = zlib.createGzip();

// reable.on('data', function (chunk) {
//     console.log(chunk);
//     writable.write(chunk);
// });
reable.pipe(writable);
reable.pipe(gzfile).pipe(compressed);