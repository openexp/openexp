var mainController = angular.module('mainController', []);
mainController.controller('mainController', ['$scope', '$filter', '$location', '$log', '$http', function($scope, $filter, $location, $log, $http) {

    // set value of the connect button
    $scope.connect = "Connect";

    // loads in the list of possible serial devices to connect to
    $scope.devices = [{Name:' '},{Name:' '},{Name:' '}];
    $scope.listDevices = function() {
    //$scope.connect = "Connect";
    $scope.nameSelectedDevice = null;
    $http.get("/listdevices").success(function (data) {
      $scope.devices = data;
      });
    };

    $scope.nameSelectedDevice = null;
    $scope.setSelected = function (nameSelectedDevice) {
        $scope.nameSelectedDevice = nameSelectedDevice;
        console.log($scope.nameSelectedDevice)
    };

    //connects/disconnects the board
    $scope.connectDevice = function() {
    $http.post("/connectdevice", {"deviceName": $scope.nameSelectedDevice}).success(function (data) {
      $scope.connect = "Disconnect";
      });
    };

}]);
