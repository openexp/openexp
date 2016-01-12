module.exports = function() {

    // APP
    require('./app/app.scss');
    require('./app/app');

    // Factory Methods
    require('./components/board/boardFactory.js');
    require('./components/board/simulatorFactory.js');

    //
    require('./app/home/home.js');
    require('./app/home/home.controller.js');
    require('./app/analyze/analyze.js');
    require('./app/analyze/analyze.controller.js');
    require('./app/connect/connect.js');
    require('./app/connect/connect.controller.js');
    require('./app/dashboard/dashboard.js');
    require('./app/dashboard/dashboard.controller.js');
    require('./app/login/login.js');
    require('./app/login/login.controller.js');
    require('./app/settings/settings.js');
    require('./app/settings/settings.controller.js');
    require('./app/experiments/reactionTimeTask/reactionTimeTask.js');
    require('./app/experiments/reactionTimeTask/reactionTimeTask.controller.js');
    require('./app/experiments/triggerTest/triggerTest.js');
    require('./app/experiments/triggerTest/triggerTest.controller.js');

    // COMPONENTS
    require('./components/navbar/navbar.js');
    require('./components/navbar/navbar.controller.js');

}();
