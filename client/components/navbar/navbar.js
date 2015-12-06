angular.module('OpenEXP')
    .directive('navbar', () => {
        return {
            restrict: 'E',
            template: require('html!./navbar.html'),
            controller: 'navbarController'
        }
    });

