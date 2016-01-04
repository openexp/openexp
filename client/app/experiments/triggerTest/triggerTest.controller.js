angular.module('OpenEXP')
    .controller('TriggerCtrl', ['$scope', ($scope) => {
        // create the connect with device
        //socket = io.connect('http://localhost:8080');


        console.log('Data stream start...')
        socket.emit('message', 'b')  //start data stream
        /* define welcome message block */
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
                image: "img/blue.png",
                data: { response: 'trigger' },
                trigger: "`",
            },

        ];

        var all_trials = jsPsych.randomization.repeat(test_stimuli, 100, true);

        var post_trial_gap = function() {
            return Math.floor( Math.random() * 1500 ) + 750;
        }
        //var post_trial_gap = 2500

        var encoding_block = {
            type: "single-stim",
            stimuli: all_trials.image,
            choices: ['F'],
            data: all_trials.data,
            timing_response: 100,
            timing_post_trial: post_trial_gap,
            trigger: all_trials.trigger,
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
            on_finish: function() {socket.emit('message', 's')  //end data stream
                jsPsych.data.displayData();
            }
        });
    }]);
