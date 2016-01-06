angular.module('OpenEXP')
    .controller('ConnectCtrl', ['$scope','boardFactory', ($scope, boardFactory) => {
        var _ = require('lodash');

        $scope.connect = boardFactory.connect;

        $scope.devices = [];

        $scope.selected;

        $scope.listDevices = () => {
            boardFactory.findPorts()
                .then(ports => {
                    $scope.$apply(_.merge($scope.devices, ports));
                })
                .then(ports => {
                    $scope.$apply(_.merge($scope.devices, ports));
                })
        };

        $scope.select = function(device) {
            $scope.selected = device;
        };

    }]);

//OpenBCIBoard.prototype.autoFindOpenBCIBoard = function() {
//    var macSerialPrefix = 'usbserial-D';
//
//    return new Promise((resolve, reject) => {
//        serialPort.list((err, ports) => {
//            if(ports.some(port => {
//                    if(port.comName.includes(macSerialPrefix)) {
//                        this.portName = port.comName;
//                        return true;
//                    }
//                })) {
//                resolve(this.connect(this.portName))
//            }
//            else resolve(ports)
//        })
//    })
//};
