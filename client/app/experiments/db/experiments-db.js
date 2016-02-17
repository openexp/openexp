angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('experiments.db', {
                url: '/experiments/db',
                controller: 'experimentsDBCtrl',
                templateUrl: './app/experiments/db/experiments-db.html'
            })
    });
