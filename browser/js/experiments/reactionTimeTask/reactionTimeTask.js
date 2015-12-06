/**
 * Created by Austin on 12/5/15.
 */
app.config(($stateProvider) => {
   $stateProvider.state('reactionTT', {
       url: '/experiments/reaction-time-task',
       templateUrl: 'js/experiments/reactionTimeTask/reactionTimeTask.html',

   });
});
