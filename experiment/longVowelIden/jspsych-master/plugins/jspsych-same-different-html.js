jsPsych.plugins["same-different-image"]=function(){var e={};return e.info={name:"same-different-image",description:"",parameters:{stimuli:{type:jsPsych.plugins.parameterType.HTML_STRING,pretty_name:"Stimuli","default":undefined,array:!0,description:"The HTML content to be displayed."},answer:{type:jsPsych.plugins.parameterType.SELECT,pretty_name:"Answer",options:["same","different"],"default":75,description:'Either "same" or "different".'},same_key:{type:jsPsych.plugins.parameterType.KEYCODE,pretty_name:"Same key","default":"Q",description:""},different_key:{type:jsPsych.plugins.parameterType.KEYCODE,pretty_name:"Different key","default":"P",description:"The key that subjects should press to indicate that the two stimuli are the same."},first_stim_duration:{type:jsPsych.plugins.parameterType.INT,pretty_name:"First stimulus duration","default":1e3,description:"How long to show the first stimulus for in milliseconds."},gap_duration:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Gap duration","default":500,description:"How long to show a blank screen in between the two stimuli."},second_stim_duration:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Second stimulus duration","default":1e3,description:"How long to show the second stimulus for in milliseconds."},prompt:{type:jsPsych.plugins.parameterType.STRING,pretty_name:"Prompt","default":"",description:"Any content here will be displayed below the stimulus."}}},e.trial=function(e,t){function s(){e.innerHTML="",jsPsych.pluginAPI.setTimeout(function(){i()},t.gap_duration)}function i(){e.innerHTML+='<div class="jspsych-same-different-stimulus">'+t.stimuli[1]+"</div>",t.second_stim_duration>0&&jsPsych.pluginAPI.setTimeout(function(){e.querySelector(".jspsych-same-different-stimulus").style.visibility="hidden"},t.second_stim_duration),""!==t.prompt&&(e.innerHTML+=t.prompt);var s=function(s){jsPsych.pluginAPI.clearAllTimeouts();var i=!1,r="string"==typeof t.same_key?jsPsych.pluginAPI.convertKeyCharacterToKeyCode(t.same_key):t.same_key,a="string"==typeof t.different_key?jsPsych.pluginAPI.convertKeyCharacterToKeyCode(t.different_key):t.different_key;s.key==r&&"same"==t.answer&&(i=!0),s.key==a&&"different"==t.answer&&(i=!0);var o={rt:s.rt,answer:t.answer,correct:i,stimulus:JSON.stringify([t.stimuli[0],t.stimuli[1]]),key_press:s.key};n&&(o.rt_stim1=n.rt,o.key_press_stim1=n.key),e.innerHTML="",jsPsych.finishTrial(o)};jsPsych.pluginAPI.getKeyboardResponse({callback_function:s,valid_responses:[t.same_key,t.different_key],rt_method:"date",persist:!1,allow_held_key:!1})}var n;if(e.innerHTML='<div class="jspsych-same-different-stimulus">'+t.stimuli[0]+"</div>",t.first_stim_duration>0)jsPsych.pluginAPI.setTimeout(function(){s()},t.first_stim_duration);else{function r(e){n=e,s()}jsPsych.pluginAPI.getKeyboardResponse({callback_function:r,valid_responses:t.advance_key,rt_method:"date",persist:!1,allow_held_key:!1})}},e}();