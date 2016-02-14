angular.module('OpenEXP')
    .controller('experimentsCtrl', ['$scope', 'boardFactory', ($scope, boardFactory) => {

    $scope.board = boardFactory.board;

}]);
