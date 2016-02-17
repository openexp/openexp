angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('experiments.local', {
                url: '/experiments/local',
                controller: 'experimentsLocalCtrl',
                templateUrl: './app/experiments/local/experiments-local.html'
            })
    });
