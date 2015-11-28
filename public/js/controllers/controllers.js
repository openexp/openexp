var mainController = angular.module('mainController', []);
mainController.controller('mainController', ['$scope', '$filter', '$location', '$log', '$http', function($scope, $filter, $location, $log, $http) {

    // loads in the list of possible serial devices to connect to
    $scope.devices = [{Name:' '},{Name:' '},{Name:' '}];
    $scope.loadDevices = function() {
    $scope.nameSelectedDevice = null;
    $http.get("/getserial").success(function (data) {
      $scope.devices = data;
      });
    };

    $scope.nameSelectedDevice = null;
    $scope.setSelected = function (nameSelectedDevice) {
        $scope.nameSelectedDevice = nameSelectedDevice;
        console.log($scope.nameSelectedDevice)
    };

    //connects to the board
    $scope.connectDevice = function() {
    $scope.connected = false;
    $http.post("/connectdevice", {"deviceName": $scope.nameSelectedDevice}).success(function (data) {
      $scope.connected = data;
      });
    };

}]);
