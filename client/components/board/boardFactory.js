angular.module('OpenEXP')
    .factory('boardFactory', () => {
        const OpenBCIBoard = require('openbci-sdk');
        //console.log(OpenBCIBoard)
        const ourBoard = new OpenBCIBoard.OpenBCIBoard();

        var findPorts = ourBoard.autoFindOpenBCIBoard;


        //var findPorts = () => {
        //    ourBoard.autoFindOpenBCIBoard();
        //};
            //return new Promise((res, rej) => {
            //    ourBoard.autoFindOpenBCIBoard((portName, ports) => {
            //        if(portName) {
            //            res(connect());
            //        } else {
            //            res(ports);
            //        }
            //    })
            //});
            //return ourBoard.autoFindOpenBCIBoard


        //};


        var storage = {};

        var connect = (portName) => {
            ourBoard.connect(portName)
                .then(boardSerial => {
                    ourBoard.on('ready',function() {
                        /** Start streaming, reading registers, what ever your heart desires  */
                    });
                }).catch(function(err) {
                /** Handle connection errors */
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
            findPorts: findPorts,
            connect: connect,
            publish: publish,
            unpublish: unpublish
        }

});
