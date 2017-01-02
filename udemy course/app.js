// var a = new Buffer('Hello everyone');
// console.log(a.toString());
// console.log(a.toJSON());

var fs = require('fs');
fs.readFile(__dirname + '/greet.txt', 'utf-8',
    function (err, data) {
        if (!err) {
            console.log(data);
        }
    }
);

console.log('read file');
// var obj = {
//     name: 'Manh',
//     greet: function() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// obj.greet();
// obj.greet.call({name: 'Jond'});
// obj.greet.apply({name: 'Jame'});
// var util = require('util');

// var name = 'Manh';
// var greeting = util.format('Hello, I am %s', name);
// var debuglog = util.debuglog('dev');
// debuglog(greeting);

// var emitter = require('./emitter');
// emitter.on('say', () => {
//     console.info('Hello everyone!\n')
// });
// emitter.on('say', () => {
//     console.info('I am Manh\n')
// });
// emitter.on('say', () => {
//     console.info('See you again.\n')
// });


// var emitter2 = require('./emitter');

// emitter2.on('say', () => {
//     console.info('Hi, I am emitter 2');
// });
// emitter2.emit('say');