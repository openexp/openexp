angular.module('OpenEXP')
    .controller('DashboardCtrl', ['$scope', 'boardFactory', ($scope, boardFactory) => {

    $scope.board = boardFactory.board;

    $scope.publish = boardFactory.publish;
    $scope.unpublish = boardFactory.unpublish;

}]);
