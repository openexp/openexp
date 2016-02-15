module.exports = function() {

    // APP
    require('./app/app.scss');
    require('./app/app');

    // FACTORY METHODS
    require('./components/board/boardFactory.js');

    // PAGES
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

    // EXPERIMENTS
    require('./app/experiments/experiments.js')
    require('./app/experiments/experiments.controller.js')
    require('./app/experiments/local/experiments-local.controller.js')
    require('./app/experiments/local/experiments-local.js')
    require('./app/experiments/local/reactionTimeTask/reactionTimeTask.js');
    require('./app/experiments/local/reactionTimeTask/reactionTimeTask.controller.js');
    require('./app/experiments/local/triggerTest/triggerTest.js');
    require('./app/experiments/local/triggerTest/triggerTest.controller.js');
    require('./app/experiments/db/experiments-db.controller.js');
    require('./app/experiments/db/experiments-db.js');

    // COMPONENTS
    require('./components/navbar/navbar.js');
    require('./components/navbar/navbar.controller.js');

}();
