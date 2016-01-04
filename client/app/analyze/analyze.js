angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('analyze', {
                url: '/',
                controller: 'AnalyzeCtrl',
                templateUrl: './app/analyze/analyze.html'
        });
});
