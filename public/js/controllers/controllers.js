var mainController = angular.module('mainController', []);
mainController.controller('mainController', ['$scope', '$filter', '$location', '$log', '$http', function($scope, $filter, $location, $log, $http) {

    $scope.devices = [{Name:' '},{Name:' '},{Name:' '}];
    $scope.loadDevices = function() {
    $scope.nameSelectedDevice = null;
    $http.get("/getserial").success(function (data) {
      $scope.devices = data;
      });
    };

    $scope.connectDevice = function() {
    $scope.connected = false;
    $http.get("/connectdevice").success(function (data) {
      $scope.connected = data;
      });
    };

    $scope.nameSelectedDevice = null;
    $scope.setSelected = function (nameSelectedDevice) {
        $scope.nameSelectedDevice = nameSelectedDevice;
    };

}]);
