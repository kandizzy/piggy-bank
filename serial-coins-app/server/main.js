import { Meteor } from 'meteor/meteor';
import SerialPort from 'serialport';
import coins from '../imports/api/coins.js';


const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

// parse the data from serial into meaningful objects
function addCoin(data) {
  console.log("Arduino Serial.println() sent", data);
  // split into an array 
  let dataArr  = data.split(":");
  console.log("Split on the : ", dataArr);

  if (dataArr[0] == "coin") {
    var v = dataArr[1].trim();
    var value = parseInt(v);
    console.log("The value as an integer", value);
    // upsert into the database so that the front end will update each time the Arduino detects a coin
    Meteor.call('coins.insert', value);
  }
  

  
  
}

var port = new SerialPort('/dev/cu.usbmodem1421', {
  baudRate: 9600
});
port.pipe(parser);
// our callback function must be wrapped in Meteor.bindEnvironment to avoid Fiber errors
parser.on('data', Meteor.bindEnvironment(addCoin));


Meteor.startup(() => {
  // code to run on server at startup
});
