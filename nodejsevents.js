import { log } from "console";
import EventEmitter from "events";

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull',()=>{
    console.log('Please turn off the motor');

    setTimeout(()=>{
        console.log('Please turn off the motor! A Gentle Reminder .')
    },3000);
})
console.log(" Script is still running ")
myEmitter.emit('WaterFull')