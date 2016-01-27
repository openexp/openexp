angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('login', {
                url: '/',
                controller: 'LoginCtrl',
                templateUrl: './app/login/login.html'
        });
});
