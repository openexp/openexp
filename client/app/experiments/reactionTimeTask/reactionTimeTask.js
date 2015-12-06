angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('reactionTimeTask', {
                url: '/',
                controller: 'HomeCtrl',
                template: require('html!./reactionTimeTask.html')
        })
    });
