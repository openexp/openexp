angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('triggerTest', {
                url: '/',
                controller: 'TriggerCtrl',
                templateUrl: './app/experiments/triggerTest/triggerTest.html'
        })
    });
