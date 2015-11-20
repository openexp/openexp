////////////////////////////////////////////////////////////////////////////////
// serve the website using express  ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* require express */
 var express = require("express");
 var myApp = express();


 // serves main page

 myApp.get("/", function(req, res) {
    res.sendFile(__dirname + '/pages/index.html')
 });

/*
  myApp.post("/user/add", function(req, res) {
	// some server side logic
	res.send("OK");
  });
*/
 // serves all the static files

 myApp.get(/^(.+)$/, function(req, res){
     console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]);
 });



 var port = process.env.PORT || 5000;
 myApp.listen(port, function() {
   console.log("Listening on " + port);
 });

/*



////////////////////////////////////////////////////////////////////////////////
// use serialport code to connect directly to the board ////////////////////////
////////////////////////////////////////////////////////////////////////////////

var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

// list serial ports:
serialport.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
  });
});



// create a serialport object
var serialPort = new SerialPort("/dev/tty.usbserial-DN0094J0", {
  baudrate: 115200,
  parser: serialport.parsers.readline("\n")
});

// code to write a trigger
function writeAndDrain (data, callback) {
  serialPort.write(data, function () {
    serialPort.drain(callback);
    console.log('sent:' + data);
  });
}

// on open, write out to the console and reset the board
 serialPort.on("open", function () {
   console.log('serial connection open: ' + serialPort.isOpen());
   serialPort.on("data", function(data) {
     //console.log('data received: ' + data.toString());
   });
   serialPort.on("error", function(error) {
     console.log(error);
   });
   serialPort.write('v');
   console.log('OpenBCI board reset to default state')
 });

// an alternate function to write data to the board - untested
function sendToSerial(data) {
 console.log("sending to serial: " + data);
 serialPort.write(data);
}

////////////////////////////////////////////////////////////////////////////////
// Require HTTP module (to start server) and Socket.IO  ////////////////////////
////////////////////////////////////////////////////////////////////////////////

var http = require('http');
var io = require('socket.io');
var port = 8080;

// Start the server at port 8080
var server = http.createServer(function(req, res){
    // Send HTML headers and message
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    res.end('<h1>Hello Socket Lover!</h1>');
});

server.listen(port);

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

    client.on('disconnect',function(){
        //clearInterval(interval);
        console.log('Server has disconnected');
    });

    client.on('listports', function(client){
      console.log('Client requests list of serial devices, sending...')
      socket.emit('openports', { hello: 'world' });
    })
});

*/

//console.log('Websocket Server running at http://127.0.0.1:' + port + '/');
console.log('Website served at http://127.0.0.1:5000/');
////////////////////////////////////////////////////////////////////////////////
// Require HTTP module (to start server) and Socket.IO  ////////////////////////
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
