angular.module('OpenEXP')
    .controller('experimentsCtrl', ['$scope', 'boardFactory', ($scope, boardFactory) => {

    $scope.board = boardFactory.board;

    $scope.experiments = [
      {
        name: "Trigger Test Experiment",
        short: "This experiment is designed to perform a trigger test using the OpenBCI hardware to test for trigger latencies.",
        state: "triggerTest"
      },
      {
        name: "Reaction Time Experiment",
        short: "In this experiment, purple and orange circles are presented to the screen and the participant responds to one of them.",
        state: "reactionTimeTask"
      },
    ];

}]);
