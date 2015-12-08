/**
 * Created by Austin on 12/8/15.
 */
app.config($stateProvider => {
    $stateProvider.state('connect', {
        url: '/connect',
        templateUrl: 'js/connect/connect.html',
        controller: 'connectController'
    });
});
