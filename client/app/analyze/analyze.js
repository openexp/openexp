angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('analyze', {
                url: '/analyze',
                controller: 'AnalyzeCtrl',
                templateUrl: './app/analyze/analyze.html'
        });
});
