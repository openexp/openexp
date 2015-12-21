angular.module('OpenEXP')
    .directive('navbar', () => {
        return {
            restrict: 'E',
            templateUrl: './components/navbar/navbar.html',
            controller: 'navbarController'
        }
    });

