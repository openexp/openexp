angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                template: require('html!./home.html')
        })
    });
