angular.module('OpenEXP')
    .controller('ConnectCtrl', ['$scope','boardFactory', 'simulatorFactory', ($scope, boardFactory, simulatorFactory) => {
        var _ = require('lodash');

        $scope.connect = simulatorFactory.connect;

        $scope.devices = [];

        $scope.selected;

        $scope.simStart = simulatorFactory.simulatorStart;

        $scope.startSimStream = simulatorFactory.publish;
        $scope.stopSimStream = simulatorFactory.unpublish;

        $scope.startStream = boardFactory.publish;
        $scope.stopStream = boardFactory.unpublish;

        $scope.tryAutoConnect = boardFactory.tryAutoConnect;
        $scope.tryAutoConnect();

        $scope.listDevices = boardFactory.listDevices;

//      envoking the function immediately
        $scope.listDevices().then((ports)=>{
            $scope.$apply(_.merge($scope.devices, ports));
            //$scope.devices = _.merge($scope.devices, ports);
        });


        $scope.select = function(device) {
            $scope.selected = device;
            console.log("Clicked: " + $scope.selected.comName)
        };

    }]);
