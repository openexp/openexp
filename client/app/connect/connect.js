angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('connect', {
                url: '/',
                controller: 'ConnectCtrl',
                templateUrl: './app/connect/connect.html'
        })
    });
