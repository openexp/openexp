angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('reactionTimeTask', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: './app/experiments/reactionTimeTask/reactionTimeTask.html'
        })
    });
