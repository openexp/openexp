angular.module('OpenEXP')
    .factory('simulatorFactory', () => {
        const OpenBCIBoardSim = require('openbci-sdk');
        const ourBoardSim = OpenBCIBoardSim.OpenBCIBoard();

        var storage = {};

        var simulatorStart = () => {
            ourBoardSim.simulatorStart()
                .then(() => {
                    ourBoardSim.on('sample',sample => {
                        storage[sample.sampleNumber] = sample;
                    })
                }).catch(err => console.log('Error [simulator]: ' + err))
        };

        var publish = (observer) => Object.observe(storage, observer);

        var unpublish = (observer) => Object.unobserve(storage, observer);

        return {
            simulatorStart: simulatorStart,
            publish: publish,
            unpublish: unpublish
        }
    });
