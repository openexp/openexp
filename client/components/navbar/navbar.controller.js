angular.module('OpenEXP')
    .controller('navbarController', ['$scope', '$state', 'boardFactory', 'simulatorFactory', ($scope, $state, boardFactory, simulatorFactory) => {

      // name scope for easy debugging
      window.MY_SCOPE = $scope;

      // scope in the board
      $scope.board =  simulatorFactory.board;

      // initialize connected text
      $scope.connectedText = 'Not Connected';

    }]);
