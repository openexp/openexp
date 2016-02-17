angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('connect', {
                url: '/connect',
                controller: 'ConnectCtrl',
                templateUrl: './app/connect/connect.html'
        })
    });
