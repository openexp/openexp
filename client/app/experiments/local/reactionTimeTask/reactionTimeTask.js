angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('reactionTimeTask', {
                url: '/experiments/local/',
                controller: 'ReactionCtrl',
                templateUrl: './app/experiments/local/reactionTimeTask/reactionTimeTask.html'
        })
    });
