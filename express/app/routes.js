var myApp = angular.module('myApp', [
  'ngRoute',
  'mainController'
]);

  myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'mainController'
      })
      .when('/connect', {
        templateUrl: 'connect/connect.html',
        controller: 'mainController'
      })
      .when('/reactionTimeTask', {
        templateUrl: 'experiments/reactionTimeTask/reactionTimeTask.html',
        controller: 'mainController'
      })
      .when('/triggerTest', {
        templateUrl: 'experiments/triggerTest/triggerTest.html',
        controller: 'mainController'
      });

      $locationProvider.html5Mode(true);
  }]);
