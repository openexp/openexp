angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: './app/home/home.html'
        })
    });
