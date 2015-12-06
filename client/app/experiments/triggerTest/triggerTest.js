angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('triggerTest', {
                url: '/',
                controller: 'HomeCtrl',
                template: require('html!./triggerTest.html')
        })
    });
