angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('triggerTest', {
                controller: 'TriggerCtrl',
                templateUrl: './app/experiments/local/triggerTest/triggerTest.html'
        })
    });
