angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('triggerTest', {
                url: '/',
                controller: 'HomeCtrl',
                template: './app/experiments/triggerTest/triggerTest.html'
        })
    });
