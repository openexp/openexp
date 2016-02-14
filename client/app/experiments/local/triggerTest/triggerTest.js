angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('triggerTest', {
                url: '/',
                controller: 'TriggerCtrl',
                templateUrl: './app/experiments/local/triggerTest/triggerTest.html'
        })
    });
