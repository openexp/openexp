angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('experiments.local.triggerTest', {
                url: '/',
                controller: 'TriggerCtrl',
                templateUrl: './app/experiments/local/triggerTest/triggerTest.html'
        })
    });
