var myApp = angular.module('myApp', [
  'ngRoute',
  'mainController'
]);

  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
      })
      .when('/sandbox', {
        templateURL: 'pages/sandbox.html',
        controller: 'mainController'
      })
      .when('/reactionTimeTask', {
        templateURL: 'pages/reactionTimeTask.html',
        controller: 'mainController'
      })
  }]);
