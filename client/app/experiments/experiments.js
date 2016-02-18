angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('experiments', {
                url: '/experiments',
                controller: 'experimentsCtrl',
                templateUrl: './app/experiments/experiments.html',
            })
    });
