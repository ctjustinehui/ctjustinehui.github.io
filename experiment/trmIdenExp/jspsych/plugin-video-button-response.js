var jsPsychVideoButtonResponse=function(e){"use strict";const t={name:"video-button-response",parameters:{stimulus:{type:e.ParameterType.VIDEO,pretty_name:"Video","default":undefined,array:!0},choices:{type:e.ParameterType.STRING,pretty_name:"Choices","default":undefined,array:!0},button_html:{type:e.ParameterType.HTML_STRING,pretty_name:"Button HTML","default":'<button class="jspsych-btn">%choice%</button>',array:!0},prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Prompt","default":null},width:{type:e.ParameterType.INT,pretty_name:"Width","default":""},height:{type:e.ParameterType.INT,pretty_name:"Height","default":""},autoplay:{type:e.ParameterType.BOOL,pretty_name:"Autoplay","default":!0},controls:{type:e.ParameterType.BOOL,pretty_name:"Controls","default":!1},start:{type:e.ParameterType.FLOAT,pretty_name:"Start","default":null},stop:{type:e.ParameterType.FLOAT,pretty_name:"Stop","default":null},rate:{type:e.ParameterType.FLOAT,pretty_name:"Rate","default":1},trial_ends_after_video:{type:e.ParameterType.BOOL,pretty_name:"End trial after video finishes","default":!1},trial_duration:{type:e.ParameterType.INT,pretty_name:"Trial duration","default":null},margin_vertical:{type:e.ParameterType.STRING,pretty_name:"Margin vertical","default":"0px"},margin_horizontal:{type:e.ParameterType.STRING,pretty_name:"Margin horizontal","default":"8px"},response_ends_trial:{type:e.ParameterType.BOOL,pretty_name:"Response ends trial","default":!0},response_allowed_while_playing:{type:e.ParameterType.BOOL,pretty_name:"Response allowed while playing","default":!0},enable_button_after:{type:e.ParameterType.INT,pretty_name:"Enable button after","default":0}}};class r{constructor(e){this.jsPsych=e}trial(e,t){function r(e){var r=performance.now(),a=Math.round(r-c);b.button=parseInt(e),b.rt=a,h.className+=" responded",s(),t.response_ends_trial&&f()}function a(e){r(e.currentTarget.getAttribute("data-choice"))}function s(){for(var e=document.querySelectorAll(".jspsych-video-button-response-button"),t=0;t<e.length;t++){var r=e[t].querySelector("button");r&&(r.disabled=!0),e[t].removeEventListener("click",a)}}function n(){for(var e=document.querySelectorAll(".jspsych-video-button-response-button"),t=0;t<e.length;t++){var r=e[t].querySelector("button");r&&(r.disabled=!1),e[t].addEventListener("click",a)}}if(!Array.isArray(t.stimulus))throw new Error("\n        The stimulus property for the video-button-response plugin must be an array\n        of files. See https://www.jspsych.org/latest/plugins/video-button-response/#parameters\n      ");var o="<div>";o+='<video id="jspsych-video-button-response-stimulus"',t.width&&(o+=' width="'+t.width+'"'),t.height&&(o+=' height="'+t.height+'"'),t.autoplay&&null==t.start&&(o+=" autoplay "),t.controls&&(o+=" controls "),null!==t.start&&(o+=' style="visibility: hidden;"'),o+=">";var i=this.jsPsych.pluginAPI.getVideoBuffer(t.stimulus[0]);if(!i)for(var l=0;l<t.stimulus.length;l++){var u=t.stimulus[l];u.indexOf("?")>-1&&(u=u.substring(0,u.indexOf("?")));var p=u.substr(u.lastIndexOf(".")+1);"mov"==(p=p.toLowerCase())&&console.warn("Warning: video-button-response plugin does not reliably support .mov files."),o+='<source src="'+u+'" type="video/'+p+'">'}o+="</video>",o+="</div>";var y=[];if(Array.isArray(t.button_html))t.button_html.length==t.choices.length?y=t.button_html:console.error("Error in video-button-response plugin. The length of the button_html array does not equal the length of the choices array");else for(l=0;l<t.choices.length;l++)y.push(t.button_html);o+='<div id="jspsych-video-button-response-btngroup">';for(l=0;l<t.choices.length;l++){var d=y[l].replace(/%choice%/g,t.choices[l]);o+='<div class="jspsych-video-button-response-button" style="cursor: pointer; display: inline-block; margin:'+t.margin_vertical+" "+t.margin_horizontal+'" id="jspsych-video-button-response-button-'+l+'" data-choice="'+l+'">'+d+"</div>"}o+="</div>",null!==t.prompt&&(o+=t.prompt),e.innerHTML=o;var c=performance.now(),h=e.querySelector("#jspsych-video-button-response-stimulus");i&&(h.src=i),h.onended=(()=>{t.trial_ends_after_video?f():t.response_allowed_while_playing||n()}),h.playbackRate=t.rate,null!==t.start&&(h.pause(),h.onseeked=(()=>{h.style.visibility="visible",h.muted=!1,t.autoplay?h.play():h.pause(),h.onseeked=(()=>{})}),h.onplaying=(()=>{h.currentTime=t.start,h.onplaying=(()=>{})}),h.muted=!0,h.play());let m=!1;null!==t.stop&&h.addEventListener("timeupdate",()=>{h.currentTime>=t.stop&&(t.response_allowed_while_playing||(t.enable_button_after>0?_(t.enable_button_after):n()),h.pause(),t.trial_ends_after_video&&!m&&(m=!0,f()))});const _=e=>{this.jsPsych.pluginAPI.setTimeout(n,e)};t.response_allowed_while_playing?(s(),null!==t.enable_button_after?_(t.enable_button_after):n()):s();var b={rt:null,button:null};const f=()=>{this.jsPsych.pluginAPI.clearAllTimeouts(),e.querySelector("#jspsych-video-button-response-stimulus").pause(),e.querySelector("#jspsych-video-button-response-stimulus").onended=(()=>{});var r={rt:b.rt,stimulus:t.stimulus,response:b.button};e.innerHTML="",this.jsPsych.finishTrial(r)};null!==t.trial_duration&&this.jsPsych.pluginAPI.setTimeout(f,t.trial_duration)}simulate(e,t,r,a){"data-only"==t&&(a(),this.simulate_data_only(e,r)),"visual"==t&&this.simulate_visual(e,r,a)}create_simulation_data(e,t){const r={stimulus:e.stimulus,rt:this.jsPsych.randomization.sampleExGaussian(500,50,1/150,!0)+e.enable_button_after,response:this.jsPsych.randomization.randomInt(0,e.choices.length-1)},a=this.jsPsych.pluginAPI.mergeSimulationData(r,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,a),a}simulate_data_only(e,t){const r=this.create_simulation_data(e,t);this.jsPsych.finishTrial(r)}simulate_visual(e,t,r){const a=this.create_simulation_data(e,t),s=this.jsPsych.getDisplayElement();this.trial(s,e),r();const n=s.querySelector("#jspsych-video-button-response-stimulus"),o=()=>{null!==a.rt&&this.jsPsych.pluginAPI.clickTarget(s.querySelector(`div[data-choice="${a.response}"] button`),a.rt)};e.response_allowed_while_playing?o():n.addEventListener("ended",o)}}return r.info=t,r}(jsPsychModule);