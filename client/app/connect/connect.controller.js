angular.module('OpenEXP')
    .controller('ConnectCtrl', ['$scope','boardFactory', 'simulatorFactory', ($scope, boardFactory, simulatorFactory) => {
        var _ = require('lodash');

        $scope.connect = boardFactory.connect;

        $scope.devices = [];

        $scope.selected;

        $scope.simStart = simulatorFactory.simulatorStart;

        $scope.startStream = simulatorFactory.publish;
        $scope.stopStream = simulatorFactory.unpublish;

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
