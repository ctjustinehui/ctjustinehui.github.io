var jsPsychVisualSearchCircle=function(e){"use strict";const t={name:"visual-search-circle",parameters:{target:{type:e.ParameterType.IMAGE,pretty_name:"Target","default":null},foil:{type:e.ParameterType.IMAGE,pretty_name:"Foil","default":null},set_size:{type:e.ParameterType.INT,pretty_name:"Set size","default":null},stimuli:{type:e.ParameterType.IMAGE,pretty_name:"Stimuli","default":null,array:!0},target_present:{type:e.ParameterType.BOOL,pretty_name:"Target present","default":undefined},fixation_image:{type:e.ParameterType.IMAGE,pretty_name:"Fixation image","default":undefined},target_size:{type:e.ParameterType.INT,pretty_name:"Target size",array:!0,"default":[50,50]},fixation_size:{type:e.ParameterType.INT,pretty_name:"Fixation size",array:!0,"default":[16,16]},circle_diameter:{type:e.ParameterType.INT,pretty_name:"Circle diameter","default":250},target_present_key:{type:e.ParameterType.KEY,pretty_name:"Target present key","default":"j"},target_absent_key:{type:e.ParameterType.KEY,pretty_name:"Target absent key","default":"f"},trial_duration:{type:e.ParameterType.INT,pretty_name:"Trial duration","default":null},fixation_duration:{type:e.ParameterType.INT,pretty_name:"Fixation duration","default":1e3},response_ends_trial:{type:e.ParameterType.BOOL,pretty_name:"Response ends trial","default":!0}}};class a{constructor(e){this.jsPsych=e}trial(e,t){var a=t.circle_diameter+t.target_size[0],r=this.generateFixationLoc(t),s=this.generatePresentationSet(t),i=this.generateDisplayLocs(s.length,t);e.innerHTML+='<div id="jspsych-visual-search-circle-container" style="position: relative; width:'+a+"px; height:"+a+'px"></div>';var n=e.querySelector("#jspsych-visual-search-circle-container");const l={rt:null,key:null,correct:!1},o=()=>{e.innerHTML="",this.jsPsych.pluginAPI.clearAllTimeouts(),this.jsPsych.pluginAPI.cancelAllKeyboardResponses();const a={correct:l.correct,rt:l.rt,response:l.key,locations:i,target_present:t.target_present,set_size:t.set_size};this.jsPsych.finishTrial(a)};(()=>{n.innerHTML+="<img src='"+t.fixation_image+"' style='position: absolute; top:"+r[0]+"px; left:"+r[1]+"px; width:"+t.fixation_size[0]+"px; height:"+t.fixation_size[1]+"px;'></img>",this.jsPsych.pluginAPI.setTimeout(()=>{p()},t.fixation_duration)})();const p=()=>{for(var e=0;e<i.length;e++)n.innerHTML+="<img src='"+s[e]+"' style='position: absolute; top:"+i[e][0]+"px; left:"+i[e][1]+"px; width:"+t.target_size[0]+"px; height:"+t.target_size[1]+"px;'></img>";const a=e=>{var a=!1;(this.jsPsych.pluginAPI.compareKeys(e.key,t.target_present_key)&&t.target_present||this.jsPsych.pluginAPI.compareKeys(e.key,t.target_absent_key)&&!t.target_present)&&(a=!0),l.rt=e.rt,l.key=e.key,l.correct=a,t.response_ends_trial&&o()},r=[t.target_present_key,t.target_absent_key],p=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:a,valid_responses:r,rt_method:"performance",persist:!1,allow_held_key:!1});null!==t.trial_duration&&this.jsPsych.pluginAPI.setTimeout(()=>{l.rt||this.jsPsych.pluginAPI.cancelKeyboardResponse(p),o()},t.trial_duration)}}generateFixationLoc(e){var t=e.circle_diameter+e.target_size[0];return[Math.floor(t/2-e.fixation_size[0]/2),Math.floor(t/2-e.fixation_size[1]/2)]}generateDisplayLocs(e,t){for(var a=t.circle_diameter,r=a/2,s=a+t.target_size[0],i=t.target_size[0]/2,n=t.target_size[1]/2,l=[],o=Math.floor(360*Math.random()),p=0;p<e;p++)l.push([Math.floor(s/2+this.cosd(o+p*(360/e))*r-n),Math.floor(s/2-this.sind(o+p*(360/e))*r-i)]);return l}generatePresentationSet(e){var t=[];if(null!==e.target&&null!==e.foil&&null!==e.set_size)if(e.target_present){for(var a=0;a<e.set_size-1;a++)t.push(e.foil);t.push(e.target)}else for(a=0;a<e.set_size;a++)t.push(e.foil);else null!==e.stimuli?t=e.stimuli:console.error("Error in visual-search-circle plugin: you must specify an array of images via the stimuli parameter OR specify the target, foil and set_size parameters.");return t}cosd(e){return Math.cos(e/180*Math.PI)}sind(e){return Math.sin(e/180*Math.PI)}simulate(e,t,a,r){"data-only"==t&&(r(),this.simulate_data_only(e,a)),"visual"==t&&this.simulate_visual(e,a,r)}create_simulation_data(e,t){const a=this.jsPsych.pluginAPI.getValidKey([e.target_present_key,e.target_absent_key]),r=this.generatePresentationSet(e),s={correct:e.target_present?a==e.target_present_key:a==e.target_absent_key,response:a,rt:this.jsPsych.randomization.sampleExGaussian(500,50,1/150,!0),set_size:r.length,target_present:e.target_present,locations:this.generateDisplayLocs(r.length,e)},i=this.jsPsych.pluginAPI.mergeSimulationData(s,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,i),i}simulate_data_only(e,t){const a=this.create_simulation_data(e,t);this.jsPsych.finishTrial(a)}simulate_visual(e,t,a){const r=this.create_simulation_data(e,t),s=this.jsPsych.getDisplayElement();this.trial(s,e),a(),null!==r.rt&&this.jsPsych.pluginAPI.pressKey(r.response,e.fixation_duration+r.rt)}}return a.info=t,a}(jsPsychModule);