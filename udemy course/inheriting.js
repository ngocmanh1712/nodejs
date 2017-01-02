'use strict';

var EventEmitter = require('events');
var eventConfig = require('./config').events;

// define class
class Greeter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello';
    }

    greet() {
        console.log(this.greeting);
        this.emit(eventConfig.GREET);
    }
};

// init class and run
var greeter = new Greeter();

greeter.on(eventConfig.GREET, () => {
    console.log('someone greet!')
});

greeter.greet();