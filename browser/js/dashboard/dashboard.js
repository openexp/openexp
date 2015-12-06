/**
 * Created by Teon on 12/12/15.
 */
app.config(($stateProvider) => {
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'js/dashboard/dashboard.html',
        controller: 'DashboardController'

    });
});
