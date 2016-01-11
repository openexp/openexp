angular.module('OpenEXP')
    .controller('ConnectCtrl', ['$scope','boardFactory', ($scope, boardFactory) => {
        var _ = require('lodash');

        $scope.connect = boardFactory.connect;

        $scope.devices = [];

        $scope.selected;


        $scope.startStream = boardFactory.publish;
        $scope.stopStream = boardFactory.unpublish;

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
