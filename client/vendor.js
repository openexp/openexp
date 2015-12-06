window.jQuery = window.$ = require("jquery");
module.exports = function() {
    // CSS
    require('style!css!bootstrap/dist/css/bootstrap.min.css');

    // JS
    require('script!jquery/dist/jquery.min.js');
    require('script!angular/angular.min.js');
    require('script!angular-ui-router/release/angular-ui-router.js');
    require('script!bootstrap/dist/js/bootstrap.min.js');
}();
