
angular.module('OpenEXP', [
    'ui.router'
])
   .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

})
    .run(($state) => {

    });
