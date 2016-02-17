angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                controller: 'DashboardCtrl',
                templateUrl: './app/dashboard/dashboard.html'
        })
    });
