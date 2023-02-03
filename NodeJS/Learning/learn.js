console.log('1. ',__dirname);
console.log('2. ',__filename);

var path = require('path');
console.log('3. ',path.basename(__filename))

console.log('4. ',process.argv)



// process object
// Input something
//process.stdin.on('data', function(answer){
//    console.log(answer.toString().trim());
//    process.exit();
//})




// Readline Module
let readline = require('readline');
let RL = readline.createInterface(process.stdin, process.stdout);
RL.question('What is your name ? ',(name) => {
    console.log(name);
    RL.close();
})



// Events
const events = require('events');
let emitter = new events.EventEmitter();

emitter.on('newevent', (message)=>{
    console.log(`Message : ${message}`);
})

emitter.emit('newevent', 'Hello');



// Module and exports
console.log(module);
module.exports.myname = 'This is module.exports.myname';
console.log(module.exports.myname);

const emitter1 = require('./export');
emitter1.on('emit',(message) => {
    console.log(`email : ${message}`);
})
emitter1.emit('emit','export-emit');


// Child process module