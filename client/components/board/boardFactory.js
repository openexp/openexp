angular.module('OpenEXP')
    .factory('boardFactory', () => {

        // requirements
        const OpenBCIBoard = require('openbci-sdk');
        const ourBoard = new OpenBCIBoard.OpenBCIBoard();
        // var fs = require('fs')
        // var wstream = fs.createWriteStream('triggerTest_500samples_jitter.txt');

        // return a promise to listen devices
        var listDevices = () => {
            return new Promise((res,rej) => {
              ourBoard.listPorts().then((value) => {
                res(value)
              }).catch((err) => {
                console.log("error!")
              })
            })
        };

        // auto-connect to the board and return an array if the board isn't found
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
              }).catch((err) => {
                console.log("error!")
                })
            })
        };

        // initialize storage object
        var storage = {};

        // connect to the board and start streaming if no errors
        var connect = (portName) => {
          return new Promise((res, rej) => {
            ourBoard.connect(portName)
                .then(() => {
                    ourBoard.on('ready', () => {
                        ourBoard.streamStart();
                        console.log('Connected!')
                        counter = 0;
                        ourBoard.on('sample', (sample) => {
                          // wstream.write(sample.auxData[0] + ',' + sample.auxData[2] + '\n');
                          // console.log(sample.channelData[0] + '\n')
                          storage[counter] = sample;
                          counter+=1;
                        })
                    })
                }).catch((err) => {
                  console.log("error!")
                })
          })
        };

        // each time there is a change of type add, log it
        var observer = (changes) => {
            changes.forEach(change => {
                if(change.type === "add") console.log(change)
            })
        };

        // set up functions to toggle the observables on/off
        var publish = () => Object.observe(storage, observer);
        var unpublish = () => Object.unobserve(storage, observer);

        // return these objects and functions
        return {
            board: ourBoard,
            tryAutoConnect: tryAutoConnect,
            listDevices: listDevices,
            connect: connect,
            publish: publish,
            unpublish: unpublish
        }

});
