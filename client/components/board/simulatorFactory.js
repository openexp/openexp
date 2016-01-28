angular.module('OpenEXP')
    .factory('simulatorFactory', () => {
        const OpenBCIBoard = require('openbci-sdk');
        const ourBoard = new OpenBCIBoard.OpenBCIBoard();

        var storage = {};

        var simulatorStart = () => {
            ourBoard.simulatorStart()
                .then(() => {
                    counter = 0;
                    console.log('Simulator Started.')
                    ourBoard.on('sample',sample => {
                        storage[counter] = sample;
                        counter+=1;
                    })
                }).catch(err => console.log('Error [simulator]: ' + err))
        };

        var observer = (changes) => {
            changes.forEach(change => {
                 console.log(change.name);
                 ourBoard.sampleData = change.name;
            })
        };

        var publish = () => Object.observe(storage, observer);
        var unpublish = () => Object.unobserve(storage, observer);

        return {
            board: ourBoard,
            simulatorStart: simulatorStart,
            publish: publish,
            unpublish: unpublish
        }
    });
