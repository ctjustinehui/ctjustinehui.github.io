jsPsych.plugins["image-button-response"]=function(){var e={};return jsPsych.pluginAPI.registerPreload("image-button-response","stimulus","image"),e.info={name:"image-button-response",description:"",parameters:{stimulus:{type:jsPsych.plugins.parameterType.IMAGE,pretty_name:"Stimulus","default":undefined,description:"The image to be displayed"},choices:{type:jsPsych.plugins.parameterType.KEYCODE,pretty_name:"Choices","default":[],array:!0,description:"The labels for the buttons."},button_html:{type:jsPsych.plugins.parameterType.STRING,pretty_name:"Button html","default":'<button class="jspsych-btn">%choice%</button>',array:!0,description:"The html of the button. Can create own style."},prompt:{type:jsPsych.plugins.parameterType.STRING,pretty_name:"Prompt","default":"",description:"Any content here will be displayed under the button."},stimulus_duration:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Stimulus duration","default":-1,description:"How long to hide the stimulus."},trial_duration:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Trial duration","default":-1,description:"How long to show the trial."},margin_vertical:{type:jsPsych.plugins.parameterType.STRING,pretty_name:"Margin vertical","default":"0px",description:"The vertical margin of the button."},margin_horizontal:{type:jsPsych.plugins.parameterType.STRING,pretty_name:"Margin horizontal","default":"8px",description:"The horizontal margin of the button."},response_ends_trial:{type:jsPsych.plugins.parameterType.BOOL,pretty_name:"Response ends trial","default":!0,description:"If true, then trial will end when user responds."}}},e.trial=function(e,t){function s(s){var r=Date.now()-l;u.button=s,u.rt=r,e.querySelector("#jspsych-image-button-response-stimulus").className+=" responded";for(var i=document.querySelectorAll(".jspsych-image-button-response-button button"),o=0;o<i.length;o++)i[o].setAttribute("disabled","disabled");t.response_ends_trial&&n()}function n(){jsPsych.pluginAPI.clearAllTimeouts();var s={rt:u.rt,stimulus:t.stimulus,button_pressed:u.button};e.innerHTML="",jsPsych.finishTrial(s)}"undefined"==typeof t.choices&&console.error('Required parameter "choices" missing in image-button-response'),"undefined"==typeof t.stimulus&&console.error('Required parameter "stimulus" missing in image-button-response');var r='<img src="'+t.stimulus+'" id="jspsych-image-button-response-stimulus"></img>',i=[];if(Array.isArray(t.button_html))t.button_html.length==t.choices.length?i=t.button_html:console.error("Error in image-button-response plugin. The length of the button_html array does not equal the length of the choices array");else for(var o=0;o<t.choices.length;o++)i.push(t.button_html);r+='<div id="jspsych-image-button-response-btngroup"></div>',e.innerHTML=r;for(o=0;o<t.choices.length;o++){var a=i[o].replace(/%choice%/g,t.choices[o]);e.querySelector("#jspsych-image-button-response-btngroup").insertAdjacentHTML("beforeend",'<div class="jspsych-image-button-response-button" style="display: inline-block; margin:'+t.margin_vertical+" "+t.margin_horizontal+'" id="jspsych-image-button-response-button-'+o+'" data-choice="'+o+'">'+a+"</div>"),e.querySelector("#jspsych-image-button-response-button-"+o).addEventListener("click",function(e){s(e.currentTarget.getAttribute("data-choice"))})}""!==t.prompt&&e.insertAdjacentHTML("beforeend",t.prompt);var u={rt:-1,button:-1},l=0;l=Date.now(),t.stimulus_duration>0&&jsPsych.pluginAPI.setTimeout(function(){e.querySelector("#jspsych-image-button-response-stimulus").style.visibility="hidden"},t.stimulus_duration),t.trial_duration>0&&jsPsych.pluginAPI.setTimeout(function(){n()},t.trial_duration)},e}();