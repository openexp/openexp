var myApp = angular.module('myApp', [
  'ngRoute',
  'mainController'
]);

  myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainController'
      })
      .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'mainController'
      })
      .when('/reactionTimeTask', {
        templateUrl: 'partials/reactionTimeTask.html',
        controller: 'mainController'
      });

      $locationProvider.html5Mode(true);
  }]);
