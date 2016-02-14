angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('reactionTimeTask', {
                url: '/',
                controller: 'ReactionCtrl',
                templateUrl: './app/experiments/local/reactionTimeTask/reactionTimeTask.html'
        })
    });
