angular.module('OpenEXP')

    // inject the board into the controller
    .controller('TriggerCtrl', ['$scope', 'boardFactory', ($scope, boardFactory) => {

        var welcome_block = {
            type: "text",
            text: "Welcome to the experiment. Press any key to begin."
        };

        /* define instructions block */
        var instructions_block = {
            type: "text",
            text: "<p>This is a diagnostic tool for computing the latency " +
            "of triggers sent from " +
            "the OpenEXP and the stimulus presentation from OpenEXP. </p>.",
            timing_post_trial: 100
        };

        /* define test block */
        var test_stimuli = [
            {
                image: "app/experiments/local/triggerTest/images/black.png",
                data: { response: 'trigger' },
                trigger: "`",
            },

        ];

        var all_trials = jsPsych.randomization.repeat(test_stimuli, 500, true);

        var post_trial_gap = function() {
            return Math.floor( Math.random() * 1000 ) + 500;
            // return 1000;
        }
        //var post_trial_gap = 2500

        var encoding_block = {
            type: "single-stim",
            stimuli: all_trials.image,
            choices: ['F'],
            data: all_trials.data,
            timing_response: 1000,
            timing_post_trial: post_trial_gap,
            trigger: all_trials.trigger,

            // passing the board as a variable
            board: boardFactory.board,

        };


        var debrief_block = {
            type: "text",
            text: function() {
                return "<p>Test Complete! Thank you :)";
            }
        };

        /* create experiment definition array */
        var experiment = [];
        experiment.push(welcome_block);
        experiment.push(instructions_block);
        experiment.push(encoding_block);
        experiment.push(debrief_block);

        /* start the experiment */
        jsPsych.init({
            experiment_structure: experiment,
            display_element: $('#jspsych-target'),
            on_finish: function() {
                console.log('Finished Experiment.');
                jsPsych.data.displayData();
            }
        });
    }]);
