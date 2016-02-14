angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('experiments.local.reactionTimeTask', {
                url: '/',
                controller: 'ReactionCtrl',
                templateUrl: './app/experiments/local/reactionTimeTask/reactionTimeTask.html'
        })
    });
