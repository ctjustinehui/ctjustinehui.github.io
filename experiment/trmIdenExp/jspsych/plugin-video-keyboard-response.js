var jsPsychVideoKeyboardResponse=function(e){"use strict";const t={name:"video-keyboard-response",parameters:{stimulus:{type:e.ParameterType.VIDEO,pretty_name:"Video","default":undefined,array:!0},choices:{type:e.ParameterType.KEYS,pretty_name:"Choices","default":"ALL_KEYS"},prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Prompt","default":null},width:{type:e.ParameterType.INT,pretty_name:"Width","default":""},height:{type:e.ParameterType.INT,pretty_name:"Height","default":""},autoplay:{type:e.ParameterType.BOOL,pretty_name:"Autoplay","default":!0},controls:{type:e.ParameterType.BOOL,pretty_name:"Controls","default":!1},start:{type:e.ParameterType.FLOAT,pretty_name:"Start","default":null},stop:{type:e.ParameterType.FLOAT,pretty_name:"Stop","default":null},rate:{type:e.ParameterType.FLOAT,pretty_name:"Rate","default":1},trial_ends_after_video:{type:e.ParameterType.BOOL,pretty_name:"End trial after video finishes","default":!1},trial_duration:{type:e.ParameterType.INT,pretty_name:"Trial duration","default":null},response_ends_trial:{type:e.ParameterType.BOOL,pretty_name:"Response ends trial","default":!0},response_allowed_while_playing:{type:e.ParameterType.BOOL,pretty_name:"Response allowed while playing","default":!0}}};class s{constructor(e){this.jsPsych=e}trial(e,t){if(!Array.isArray(t.stimulus))throw new Error("\n        The stimulus property for the video-keyboard-response plugin must be an array\n        of files. See https://www.jspsych.org/latest/plugins/video-keyboard-response/#parameters\n      ");var s="<div>";s+='<video id="jspsych-video-keyboard-response-stimulus"',t.width&&(s+=' width="'+t.width+'"'),t.height&&(s+=' height="'+t.height+'"'),t.autoplay&&null==t.start&&(s+=" autoplay "),t.controls&&(s+=" controls "),null!==t.start&&(s+=' style="visibility: hidden;"'),s+=">";var a=this.jsPsych.pluginAPI.getVideoBuffer(t.stimulus[0]);if(!a)for(var r=0;r<t.stimulus.length;r++){var i=t.stimulus[r];i.indexOf("?")>-1&&(i=i.substring(0,i.indexOf("?")));var l=i.substr(i.lastIndexOf(".")+1);"mov"==(l=l.toLowerCase())&&console.warn("Warning: video-keyboard-response plugin does not reliably support .mov files."),s+='<source src="'+i+'" type="video/'+l+'">'}s+="</video>",s+="</div>",null!==t.prompt&&(s+=t.prompt),e.innerHTML=s;var n=e.querySelector("#jspsych-video-keyboard-response-stimulus");a&&(n.src=a),n.onended=(()=>{t.trial_ends_after_video&&u(),0!=t.response_allowed_while_playing||t.trial_ends_after_video||this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:y,valid_responses:t.choices,rt_method:"performance",persist:!1,allow_held_key:!1})}),n.playbackRate=t.rate,null!==t.start&&(n.pause(),n.onseeked=(()=>{n.style.visibility="visible",n.muted=!1,t.autoplay?n.play():n.pause(),n.onseeked=(()=>{})}),n.onplaying=(()=>{n.currentTime=t.start,n.onplaying=(()=>{})}),n.muted=!0,n.play());let o=!1;null!==t.stop&&n.addEventListener("timeupdate",()=>{n.currentTime>=t.stop&&(t.response_allowed_while_playing||this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:y,valid_responses:t.choices,rt_method:"performance",persist:!1,allow_held_key:!1}),n.pause(),t.trial_ends_after_video&&!o&&(o=!0,u()))});var p={rt:null,key:null};const u=()=>{this.jsPsych.pluginAPI.clearAllTimeouts(),this.jsPsych.pluginAPI.cancelAllKeyboardResponses(),e.querySelector("#jspsych-video-keyboard-response-stimulus").pause(),e.querySelector("#jspsych-video-keyboard-response-stimulus").onended=(()=>{});var s={rt:p.rt,stimulus:t.stimulus,response:p.key};e.innerHTML="",this.jsPsych.finishTrial(s)};var y=s=>{e.querySelector("#jspsych-video-keyboard-response-stimulus").className+=" responded",null==p.key&&(p=s),t.response_ends_trial&&u()};"NO_KEYS"!=t.choices&&t.response_allowed_while_playing&&this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:y,valid_responses:t.choices,rt_method:"performance",persist:!1,allow_held_key:!1}),null!==t.trial_duration&&this.jsPsych.pluginAPI.setTimeout(u,t.trial_duration)}simulate(e,t,s,a){"data-only"==t&&(a(),this.simulate_data_only(e,s)),"visual"==t&&this.simulate_visual(e,s,a)}simulate_data_only(e,t){const s=this.create_simulation_data(e,t);this.jsPsych.finishTrial(s)}simulate_visual(e,t,s){const a=this.create_simulation_data(e,t),r=this.jsPsych.getDisplayElement();this.trial(r,e),s();const i=r.querySelector("#jspsych-video-button-response-stimulus"),l=()=>{null!==a.rt&&this.jsPsych.pluginAPI.pressKey(a.response,a.rt)};e.response_allowed_while_playing?l():i.addEventListener("ended",l)}create_simulation_data(e,t){const s={stimulus:e.stimulus,rt:this.jsPsych.randomization.sampleExGaussian(500,50,1/150,!0),response:this.jsPsych.pluginAPI.getValidKey(e.choices)},a=this.jsPsych.pluginAPI.mergeSimulationData(s,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,a),a}}return s.info=t,s}(jsPsychModule);