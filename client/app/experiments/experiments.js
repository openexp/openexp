angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('experiments', {
                abstract: 'true',
                url: '/',
                controller: 'experimentsCtrl',
                templateUrl: './app/experiments/experiments.html',
                redirectTo: 'experiments.local'
            })
    });
