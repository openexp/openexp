var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){

  $routeProvider

  .when('/', {
    templateURL: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/sandbox', {
    templateURL: 'pages/sandbox.html',
    controller: 'sandboxController'
  })

  .when('/reactionTimeTask', {
    templateURL: 'pages/reactionTimeTask.html',
    controller: 'experimentsController'
  })

});

myApp.controller('mainController',['$scope',function($scope){
  $scope.test = 'test';
}]);
