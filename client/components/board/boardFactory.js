angular.module('OpenEXP')
    .factory('boardFactory', () => {
        const OpenBCIBoard = require('openbci-sdk');
        const ourBoard = new OpenBCIBoard.OpenBCIBoard();

        // wrote a method in the openbci-sdk to return an array of ports and
        // wrapping it in a promise here
        var listDevices = () => {
            return new Promise((res,rej) => {
              ourBoard.listPorts().then((value) => {
                res(value)
                console.log(value)
              })
            })
        };

        // when the connect state is loaded in the app, it auto runs this function
        // which either connects to the board and starts the data stream, or
        // returns an array of available devices
        var tryAutoConnect = () => {
            return new Promise((res, rej) => {
              ourBoard.autoFindOpenBCIBoard().then((value) => {
                if(Array.isArray(value)) {
                  /**Unable to auto find OpenBCI board*/
                  res(value);
                  console.log("Board not auto-detected. Returning list of ports.")
                } else {
                  console.log("Auto-detected board!  Connecting...")
                  res(connect(value))
                }
              })
          })
        };

        var storage = {};

        var connect = (portName) => {
            ourBoard.connect(portName)
                .then(boardSerial => {
                    ourBoard.on('ready',function() {
                        console.log('Connected!')
                        ourBoard.streamStart();
                        this.isConnected = true;
                    });
                }).catch(function(err) {
                /** Handle connection errors */
                console.log("error!")
            });
        };

        var observer = function(changes) {
            changes.forEach(change => {
                if(change.type === "add") console.log(change)
            })
        };

        var publish = () => Object.observe(storage, observer);

        var unpublish = () => Object.unobserve(storage, observer);


        return {
            tryAutoConnect: tryAutoConnect,
            listDevices: listDevices,
            connect: connect,
            publish: publish,
            unpublish: unpublish
        }

});
