angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('connect', {
                url: '/',
                controller: 'HomeCtrl',
                template: require('html!./connect.html')
        })
    });
