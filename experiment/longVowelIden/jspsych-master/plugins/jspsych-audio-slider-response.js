jsPsych.plugins["audio-slider-response"]=function(){var e={};return jsPsych.pluginAPI.registerPreload("audio-slider-response","stimulus","audio"),e.info={name:"audio-slider-response",description:"",parameters:{stimulus:{type:jsPsych.plugins.parameterType.AUDIO,pretty_name:"Stimulus","default":undefined,description:"The image to be displayed"},min:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Min slider","default":0,description:"Sets the minimum value of the slider."},max:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Max slider","default":100,description:"Sets the maximum value of the slider"},step:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Step","default":1,description:"Sets the step of the slider"},labels:{type:jsPsych.plugins.parameterType.KEYCODE,pretty_name:"Labels","default":[],array:!0,description:"Labels of the slider."},button_label:{type:jsPsych.plugins.parameterType.STRING,pretty_name:"Button label","default":undefined,array:!1,description:"Label of the button to advance."},prompt:{type:jsPsych.plugins.parameterType.STRING,pretty_name:"Prompt","default":"",description:"Any content here will be displayed below the slider."},stimulus_duration:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Stimulus duration","default":-1,description:"How long to hide the stimulus."},trial_duration:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Trial duration","default":-1,description:"How long to show the trial."},response_ends_trial:{type:jsPsych.plugins.parameterType.BOOL,pretty_name:"Response ends trial","default":!0,description:"If true, trial will end when user makes a response."}}},e.trial=function(e,s){function t(){jsPsych.pluginAPI.clearAllTimeouts();var s={rt:u.rt,response:u.response};e.innerHTML="",jsPsych.finishTrial(s)}var i=jsPsych.pluginAPI.audioContext();if(null!==i){var r=i.createBufferSource();r.buffer=jsPsych.pluginAPI.getAudioBuffer(s.stimulus),r.connect(i.destination)}else{var n=jsPsych.pluginAPI.getAudioBuffer(s.stimulus);n.currentTime=0}s.trial_ends_after_audio&&(null!==i?r.onended=function(){t()}:n.addEventListener("ended",t));var a='<div id="jspsych-audio-slider-response-wrapper" style="margin: 100px 0px;">';a+='<div id="jspsych-audio-slider-response-stimulus"><img src="'+s.stimulus+'"></div>',a+='<div class="jspsych-audio-slider-response-container" style="position:relative;">',a+='<input type="range" min="'+s.min+'" max="'+s.max+'" step="'+s.step+'" style="width: 100%;" id="jspsych-audio-slider-response-response"></input>',a+="<div>";for(var l=0;l<s.labels.length;l++){var p=100/(s.labels.length-1);a+='<div style="display: inline-block; position: absolute; left:'+(l*(100/(s.labels.length-1))-p/2)+"%; text-align: center; width: "+p+'%;">',a+='<span style="text-align: center; font-size: 80%;">'+s.labels[l]+"</span>",a+="</div>"}a+="</div>",a+="</div>",a+="</div>",a+=s.prompt,a+='<button id="jspsych-audio-slider-response-next" class="jspsych-btn">'+s.button_label+"</button>",e.innerHTML=a;var u={rt:-1,response:-1};e.querySelector("#jspsych-audio-slider-response-next").addEventListener("click",function(){var i=(new Date).getTime();u.rt=i-o,u.response=e.querySelector("#jspsych-audio-slider-response-response").value,s.response_ends_trial?t():e.querySelector("#jspsych-audio-slider-response-next").disabled=!0}),s.stimulus_duration>0&&jsPsych.pluginAPI.setTimeout(function(){e.querySelector("#jspsych-audio-slider-response-stimulus").style.visibility="hidden"},s.stimulus_duration),s.trial_duration>0&&jsPsych.pluginAPI.setTimeout(function(){t()},s.trial_duration);var o=(new Date).getTime()},e}();