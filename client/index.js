module.exports = function() {
    // APP
    require('./app/app');
    require('./app/home/home.js');
    require('./app/home/home.controller.js');
    require('./app/connect/connect.js');
    require('./app/connect/connect.controller.js');
    require('./app/dashboard/dashboard.js');
    require('./app/dashboard/dashboard.controller.js');
    // Experiments. Maybe find a way to parse the folder with pattern
    require('./app/experiments/reactionTimeTask/reactionTimeTask.js');
    require('./app/experiments/reactionTimeTask/reactionTimeTask.controller.js');
    require('./app/experiments/triggerTest/triggerTest.js');
    require('./app/experiments/triggerTest/triggerTest.controller.js');


    // COMPONENTS
    require('./components/navbar/navbar.js');
    require('./components/navbar/navbar.controller.js');

}();
