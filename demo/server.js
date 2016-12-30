var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('say', function(arg1, arg2) {
    console.log(arg1 + ": " + arg2);
});

console.log('ahaha');
eventEmitter.emit('say', 'hello', 'i am manh');

var buf = new Buffer("Hoc Nodejs tai VietJack", "utf-8");
console.log(buf);