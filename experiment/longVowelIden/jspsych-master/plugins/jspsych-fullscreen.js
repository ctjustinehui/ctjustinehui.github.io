jsPsych.plugins.fullscreen=function(){var e={};return e.info={name:"fullscreen",description:"",parameters:{fullscreen_mode:{type:jsPsych.plugins.parameterType.BOOL,pretty_name:"Fullscreen mode","default":!0,array:!1,description:"If true, experiment will enter fullscreen mode. If false, the browser will exit fullscreen mode."},message:{type:jsPsych.plugins.parameterType.STRING,pretty_name:"Message","default":"<p>The experiment will switch to full screen mode when you press the button below</p>",array:!1,description:"HTML content to display above the button to enter fullscreen mode."},button_label:{type:jsPsych.plugins.parameterType.STRING,pretty_name:"Button label","default":"Continue",array:!1,description:"The text that appears on the button to enter fullscreen."},delay_after:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Delay after","default":1e3,array:!1,description:"The length of time to delay after entering fullscreen mode before ending the trial."}}},e.trial=function(e,t){function n(){e.innerHTML="",jsPsych.pluginAPI.setTimeout(function(){var e={success:!l};jsPsych.finishTrial(e)},t.delay_after)}var l="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element;if(l)n();else if(t.fullscreen_mode){e.innerHTML=t.message+'<button id="jspsych-fullscreen-btn" class="jspsych-btn">'+t.button_label+"</button>";e.querySelector("#jspsych-fullscreen-btn").addEventListener("click",function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),n()})}else document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),n()},e}();