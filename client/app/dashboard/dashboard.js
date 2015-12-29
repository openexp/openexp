angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('dashboard', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: './app/dashboard/dashboard.html'
        })
    });
