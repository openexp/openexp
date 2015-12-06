/**
 * Created by Austin on 12/5/15.
 */
app.directive('navbar', () => {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/navbar/navbar.html',
        controller: 'navbarController'
    }
});
