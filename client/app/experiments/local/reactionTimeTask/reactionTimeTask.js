angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('reactionTimeTask', {
                controller: 'ReactionCtrl',
                templateUrl: './app/experiments/local/reactionTimeTask/reactionTimeTask.html'
        })
    });
