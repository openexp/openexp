angular.module('OpenEXP')
    .controller('HomeCtrl', ['$scope','boardFactory', ($scope, boardFactory) => {
        $scope.connect = boardFactory.connect;
        $scope.publish = boardFactory.publish;
        $scope.unpublish = boardFactory.unpublish;

    }]);
