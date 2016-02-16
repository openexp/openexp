angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('experiments', {
                url: '/',
                controller: 'experimentsCtrl',
                templateUrl: './app/experiments/experiments.html',
            })
    });
