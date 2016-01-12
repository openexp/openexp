angular.module('OpenEXP')
    .factory('simulatorFactory', () => {
        const OpenBCIBoard = require('openbci-sdk');
        const ourBoard = new OpenBCIBoard.OpenBCIBoard();

        var storage = {};

        var simulatorStart = () => {
            ourBoard.simulatorStart()
                .then(() => {
                    ourBoard.on('sample',sample => {
                        storage[sample.sampleNumber] = sample;
                    })
                }).catch(err => console.log('Error [simulator]: ' + err))
        };

        var observer = function(changes) {
            changes.forEach(change => {
                if(change.type === "add") console.log(change)
            })
        };

        var publish = () => Object.observe(storage, observer);

        var unpublish = () => Object.unobserve(storage, observer);

        return {
            simulatorStart: simulatorStart,
            publish: publish,
            unpublish: unpublish
        }
    });
