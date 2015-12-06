angular.module('OpenEXP', [
    'ui.router'
])
   .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5mode(false);
})
    .run(($rootscope, $state) => {

    });
