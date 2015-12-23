angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('reactionTimeTask', {
                url: '/',
                controller: 'HomeCtrl',
                template: './app/experiments/reactionTimeTask.html'
        })
    });
