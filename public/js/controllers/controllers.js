var mainController = angular.module('mainController', []);
mainController.controller('mainController', ['$scope', '$filter', '$location', '$log', '$http', function($scope, $filter, $location, $log, $http) {

    //$log.info($location.path());

    var mockDataForThisTest = "json=" + encodeURI(JSON.stringify([
      {
        id: 1,
        Location: "Peter",
        Name: "Jhons"},
        {
          id: 2,
          Location: "David",
          Name: "Bowie"}
        ]));

    //$log.info(mockDataForThisTest);

    $scope.devices = [];

    $scope.loadDevices = function() {
        // var httpRequest = $http({
        //     method: 'POST',
        //     url: '/echo/json/',
        //     data: mockDataForThisTest
        //
        // }).success(function(data, status) {
        //     $scope.devices = data;
        // });

        $scope.devices = [{
          id: 1,
          Path: "/dev/cu",
          Name: "DNXXXXXXXXXX"},
          {
            id: 2,
            Path: "/dev/cu",
            Name: "DNXXXXXXXXXX"}];
      };

}]);
