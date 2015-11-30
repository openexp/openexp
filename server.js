////////////////////////////////////////////////////////////////////////////////
// serve the website using express + node  /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

 var express = require("express");
 var bodyParser = require("body-parser");
 var myApp = express();

 // create application/json parser
 var jsonParser = bodyParser.json()
 myApp.use(bodyParser.urlencoded({ extended: false }));

 myApp.use(express.static(__dirname + '/public/'));
 myApp.use(express.static(__dirname + '/externals/'));

 // serves main page
 myApp.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
    console.log("Loaded index.")
 });

 myApp.get('/listdevices', function(req,res){
   devices=[]
   serialport.list(function (err, ports) {
     ports.forEach(function(port) {
        devices.push({Name: port.comName})
   });
   res.json(devices);
   //console.log(devices);
 });
 });

 myApp.post('/connectdevice', jsonParser, function(req,res){
  //create a serialport object
  //  var serialPort = new SerialPort(req.body.deviceName, {
  //    baudrate: 115200,
  //    parser: serialport.parsers.readline("\n")
  //  });
  console.log("Connecting to: " + req.body.deviceName)
  res.json({"Connected":true})
 });

 myApp.post('/disconnectdevice', jsonParser, function(req,res){
  //create a serialport object
  //  var serialPort = new SerialPort(req.body.deviceName, {
  //    baudrate: 115200,
  //    parser: serialport.parsers.readline("\n")
  //  });
  console.log("Disconnecting from: " + req.body.deviceName)
  res.json({"Connected":false})
 });

// start server on port 5000
 var port = process.env.PORT || 5000;
 myApp.listen(port, function() {
   console.log('Point your browser to http://localhost:' + port);
 });

////////////////////////////////////////////////////////////////////////////////
// Set up Socket.IO to send messages between client and server /////////////////
////////////////////////////////////////////////////////////////////////////////

var http = require('http');
var io = require('socket.io');
var socketport = 8080;

// Start the server at port 8080
var server = http.createServer(function(req, res){
    // Send HTML headers and message
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    res.end('<h1>Hello Socket Lover!</h1>');
});
server.listen(socketport);

// Create a Socket.IO instance, passing it our server
var socket = io.listen(server);

// Add a connect listener
socket.on('connection', function(client){
    console.log('Connection to client established');

    // Success!  Now listen to messages to be received
    client.on('message',function(event){
        console.log('Received message from client!',event);
        writeAndDrain(event)
    });

    client.on('trigger',function(event){
        console.log('Trigger from client!',event);
    });

    client.on('disconnect',function(){
        //clearInterval(interval);
        console.log('Server has disconnected');
    });

    client.on('listports', function(client){
      console.log('Client requests list of serial devices, sending...')
      serialport.list(function (err, ports) {
        // $scope=[];
        // $scope.devices=[];
        // ports.forEach(function(port) {
        //     $scope.devices.push({id: 1,
        //       Name: port.comName})
        // });
        // console.log($scope.devices);
        // socket.emit('serialdevices',$scope.devices)
      });
    })
});

////////////////////////////////////////////////////////////////////////////////
// use serialport code to connect directly to the board ////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
//
// //list serial ports:
// serialport.list(function (err, ports) {
//   ports.forEach(function(port) {
//     console.log(port.comName);
//   });
// });
//
//
// // code to write a trigger
// function writeAndDrain (data, callback) {
//   serialPort.write(data, function () {
//     serialPort.drain(callback);
//     console.log('sent:' + data);
//   });
// }
//
//
// // create a serialport object
// // var serialPort = new SerialPort("/dev/tty.usbserial-DN0094J0", {
// //   baudrate: 115200,
// //   parser: serialport.parsers.readline("\n")
// // });
//
// // on open, write out to the console and reset the board
//  serialPort.on("open", function () {
//    console.log('serial connection open: ' + serialPort.isOpen());
//    serialPort.on("data", function(data) {
//      //console.log('data received: ' + data.toString());
//    });
//    serialPort.on("error", function(error) {
//      console.log(error);
//    });
//    serialPort.write('v');
//    console.log('OpenBCI board reset to default state')
//  });
//
// // an alternate function to write data to the board - untested
// function sendToSerial(data) {
//  console.log("sending to serial: " + data);
//  serialPort.write(data);
// }

////////////////////////////////////////////////////////////////////////////////
// code to get started with electron  //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
var myApp = require('myApp')
var BrowserWindow = require('browser-window')

myApp.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width:1000,
    height:800
  })

  // Load the main URL
  mainWindow.loadUrl('file://' + __dirname + '/index.html')

   // Open the DevTools.
  mainWindow.openDevTools();

})
*/
