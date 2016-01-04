angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('settings', {
                url: '/',
                controller: 'SettingsCtrl',
                templateUrl: './app/settings/settings.html'
        });
});
