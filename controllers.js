var mainController = angular.module('mainController', []);

mainController.controller('mainController', ['$scope', '$filter', '$location', '$log', function($scope, $filter, $location, $log) {

    $log.info($location.path());

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $scope.rules = [

        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }

    ];

    console.log($scope.rules);

}]);
