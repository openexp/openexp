angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('loading', {
                url: '/',
                controller: 'LoadingCtrl',
                templateUrl: './app/loading/loading.html'
        });
});
