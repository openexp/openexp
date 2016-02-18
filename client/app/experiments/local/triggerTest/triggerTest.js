angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('triggerTest', {
                url: '/experiments/local/triggertest',
                controller: 'TriggerCtrl',
                templateUrl: './app/experiments/local/triggerTest/triggerTest.html'
        })
    });
