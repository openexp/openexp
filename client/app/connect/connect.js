angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('connect', {
                url: '/',
                controller: 'HomeCtrl',
                template: './app/connect/connect.html'
        })
    });
