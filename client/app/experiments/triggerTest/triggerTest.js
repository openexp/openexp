angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('triggerTest', {
                url: '/',
                controller: 'TriggerCtrl',
                template: './app/experiments/triggerTest/triggerTest.html'
        })
    });
