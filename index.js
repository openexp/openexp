 var express = require("express");
 var app = express();

 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('index.html')
 });

  app.post("/user/add", function(req, res) {
	/* some server side logic */
	res.send("OK");
  });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){
     console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]);
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });

//////////////////////////////////////////////////
//code to connect directly to the board
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

// list serial ports:
serialport.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
  });
});

var serialPort = new SerialPort("/dev/tty.usbserial-DN0094J0", {
  baudrate: 115200,
  parser: serialport.parsers.readline("\n")
});


function writeAndDrain (data, callback) {
  serialPort.write(data, function () {
    serialPort.drain(callback);
    console.log('sent:' + data);
  });
}

 serialPort.on("open", function () {
   console.log('serial connection open: ' + serialPort.isOpen());
   /*serialPort.on("data", function(data) {
     console.log('data received: ' + data);
   });*/
 });


function sendToSerial(data) {
 console.log("sending to serial: " + data);
 serialPort.write(data);
}

// Require HTTP module (to start server) and Socket.IO
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
});

console.log('Server running at http://127.0.0.1:' + port + '/');
