'use strict';
window.app = angular.module('OpenEXP', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');
});

// This app.run is for controlling access to specific states.
app.run(function ($rootScope, $state) {

    // The given state requires an authenticated user.

    // $stateChangeStart is an event fired
    // whenever the process of changing a state begins.
    //$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    //    console.log(event, toState, toParams);
    //    //$state.go('sandbox');
    //
    //});

});
