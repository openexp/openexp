angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('dashboard', {
                url: '/',
                controller: 'DashboardCtrl',
                templateUrl: './app/dashboard/dashboard.html'
        })
    });
