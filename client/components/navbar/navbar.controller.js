angular.module('OpenEXP')
    .controller('navbarController', ['$scope', '$state', 'boardFactory', ($scope, $state, boardFactory) => {

      // name scope for easy debugging
      window.MY_SCOPE = $scope;

      // scope in the board
      $scope.board =  boardFactory.board;

    }]);
