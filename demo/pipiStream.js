var fs = require('fs');
var zlib = require('zlib');

// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));

// console.log('ok');

// fs.createReadStream('input.txt.gz')
// .pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream('input2.txt'));

// console.log('ok');

// fs.stat('input.txt', function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("Lay thong tin File thanh cong!");
   
//    // Kiem tra kieu file
//    console.log("isFile ? " + stats.isFile());
//    console.log("isDirectory ? " + stats.isDirectory());    
// });

// fs.writeFile('input.txt', 'Kiểm tra wirte file 2S', 'utf-8', '0666', 'w',
//     function(err) {
//         if(err){
//             console.error(err);
//         }

//     });
// fs.unlink('input2.txt', function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("Xoa File thanh cong!");
// // });
// console.log(__filename);
// console.log(__dirname);
// function printHello(){
//    console.error( "Hello World!");
// }
// // Bay gio, chung ta goi ham pringtHello sau 2 giay
// setInterval(printHello, 2000);
console.info("Bat dau chuong trinh!");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Chuan bi lay du lieu!");
//
// Thuc hien mot so phuong thuc de lay du lieu tai day ...
// 
console.timeEnd('Lay du lieu thanh cong!');

console.info("Ket thuc chuong trinh!")