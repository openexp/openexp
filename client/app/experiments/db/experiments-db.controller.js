angular.module('OpenEXP')
    .controller('experimentsDBCtrl', ['$scope', 'boardFactory', ($scope, boardFactory) => {

    $scope.board = boardFactory.board;

}]);
