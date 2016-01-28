angular.module('OpenEXP')
    .controller('DashboardCtrl', ['$scope', 'boardFactory', 'simulatorFactory', ($scope, boardFactory, simulatorFactory) => {

    $scope.board = boardFactory.board;
    $scope.startStream = boardFactory.publish;
    $scope.stopStream = boardFactory.unpublish;

}]);
