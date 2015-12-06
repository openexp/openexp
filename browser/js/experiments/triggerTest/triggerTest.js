/**
 * Created by Teon on 12/12/15.
 */
app.config(($stateProvider) => {
   $stateProvider.state('triggerTest', {
       url: '/experiments/trigger-test',
       templateUrl: 'js/experiments/triggerTest/triggerTest.html',

   });
});
