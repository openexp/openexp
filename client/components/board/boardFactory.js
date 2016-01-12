angular.module('OpenEXP')
    .factory('boardFactory', () => {
        const OpenBCIBoard = require('openbci-sdk');
        //console.log(OpenBCIBoard)
        const ourBoard = new OpenBCIBoard.OpenBCIBoard();

        var storage = {};

        //var connect = ourBoard.connect(portName)
        //    .then(boardSerial => {
        //        ourBoard.on('ready',function() {
        //            /** Start streaming, reading registers, what ever your heart desires  */
        //        });
        //}).catch(function(err) {
        //    /** Handle connection errors */
        //});
        var connect = function() {
            ourBoard.simulatorStart().then(function() {
                ourBoard.on('sample',sample => {
                    storage[sample.sampleNumber] = sample;
                })
            }).catch(err => console.log('Error [simulator]: ' + err))
        }

        var observer = function(changes) {
            changes.forEach(change => {
                if(change.type === "add") console.log(change)
            })
        };

        var publish = function() {
            Object.observe(storage, observer)
        };

        var unpublish = function() {
            Object.unobserve(storage,observer)
        };


        return {
            connect: connect,
            publish: publish,
            unpublish: unpublish
        }

});
