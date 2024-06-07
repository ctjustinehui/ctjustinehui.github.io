var jsPsychSerialReactionTime=function(e){"use strict";const t={name:"serial-reaction-time",parameters:{grid:{type:e.ParameterType.BOOL,pretty_name:"Grid",array:!0,"default":[[1,1,1,1]]},target:{type:e.ParameterType.INT,pretty_name:"Target",array:!0,"default":undefined},choices:{type:e.ParameterType.KEYS,pretty_name:"Choices",array:!0,"default":[["3","5","7","9"]]},grid_square_size:{type:e.ParameterType.INT,pretty_name:"Grid square size","default":100},target_color:{type:e.ParameterType.STRING,pretty_name:"Target color","default":"#999"},response_ends_trial:{type:e.ParameterType.BOOL,pretty_name:"Response ends trial","default":!0},pre_target_duration:{type:e.ParameterType.INT,pretty_name:"Pre-target duration","default":0},trial_duration:{type:e.ParameterType.INT,pretty_name:"Trial duration","default":null},show_response_feedback:{type:e.ParameterType.BOOL,pretty_name:"Show response feedback","default":!1},feedback_duration:{type:e.ParameterType.INT,pretty_name:"Feedback duration","default":200},fade_duration:{type:e.ParameterType.INT,pretty_name:"Fade duration","default":null},prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Prompt","default":null,no_function:!1}}};class r{constructor(e){this.jsPsych=e,this.stimulus=function(e,t,r,s,a){for(var i="<div id='jspsych-serial-reaction-time-stimulus' style='margin:auto; display: table; table-layout: fixed; border-spacing:"+t/4+"px'>",l=0;l<e.length;l++){i+="<div class='jspsych-serial-reaction-time-stimulus-row' style='display:table-row;'>";for(var o=0;o<e[l].length;o++)i+="<div class='jspsych-serial-reaction-time-stimulus-cell' id='jspsych-serial-reaction-time-stimulus-cell-"+l+"-"+o+"' style='width:"+t+"px; height:"+t+"px; display:table-cell; vertical-align:middle; text-align: center; font-size:"+t/2+"px;",1==e[l][o]&&(i+="border: 2px solid black;"),void 0!==r&&r[0]==l&&r[1]==o&&(i+="background-color: "+s+";"),i+="'>",void 0!==a&&!1!==a[l][o]&&(i+=a[l][o]),i+="</div>";i+="</div>"}return i+="</div>"}}trial(e,t){for(var r,s=t.choices.flat();s.indexOf("")>-1;)s.splice(s.indexOf(""),1);var a={rt:null,key:!1,correct:!1};const i=()=>{this.jsPsych.pluginAPI.clearAllTimeouts(),this.jsPsych.pluginAPI.cancelKeyboardResponse(r);var s={rt:a.rt,response:a.key,correct:a.correct,grid:t.grid,target:t.target};e.innerHTML="",this.jsPsych.finishTrial(s)},l=()=>{if(null==a.rt||0==t.show_response_feedback)i();else{var r=a.correct?"#0f0":"#f00";e.querySelector("#jspsych-serial-reaction-time-stimulus-cell-"+a.responseLoc[0]+"-"+a.responseLoc[1]).style.transition="",e.querySelector("#jspsych-serial-reaction-time-stimulus-cell-"+a.responseLoc[0]+"-"+a.responseLoc[1]).style.backgroundColor=r,this.jsPsych.pluginAPI.setTimeout(i,t.feedback_duration)}},o=e=>{a=null==a.rt?e:a;for(var r=[],s=0;s<t.choices.length;s++)for(var o=0;o<t.choices[s].length;o++){var n=t.choices[s][o];if(this.jsPsych.pluginAPI.compareKeys(e.key,n)){r=[s,o];break}}a.responseLoc=r,a.correct=JSON.stringify(r)==JSON.stringify(t.target),t.response_ends_trial&&(t.show_response_feedback?l():i())},n=()=>{null==t.fade_duration?e.querySelector("#jspsych-serial-reaction-time-stimulus-cell-"+t.target[0]+"-"+t.target[1]).style.backgroundColor=t.target_color:(e.querySelector("#jspsych-serial-reaction-time-stimulus-cell-"+t.target[0]+"-"+t.target[1]).style.transition="background-color "+t.fade_duration,e.querySelector("#jspsych-serial-reaction-time-stimulus-cell-"+t.target[0]+"-"+t.target[1]).style.backgroundColor=t.target_color),r=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:o,valid_responses:s,allow_held_key:!1}),null!==t.trial_duration&&this.jsPsych.pluginAPI.setTimeout(l,t.trial_duration)};var c=this.stimulus(t.grid,t.grid_square_size);e.innerHTML=c,t.pre_target_duration<=0?n():this.jsPsych.pluginAPI.setTimeout(n,t.pre_target_duration),null!==t.prompt&&(e.innerHTML+=t.prompt)}simulate(e,t,r,s){"data-only"==t&&(s(),this.simulate_data_only(e,r)),"visual"==t&&this.simulate_visual(e,r,s)}create_simulation_data(e,t){let r;if(1==this.jsPsych.randomization.sampleBernoulli(.8))r=e.choices[e.target[0]][e.target[1]];else for(r=this.jsPsych.pluginAPI.getValidKey(e.choices);r==e.choices[e.target[0]][e.target[1]];)r=this.jsPsych.pluginAPI.getValidKey(e.choices);const s={grid:e.grid,target:e.target,response:r,rt:this.jsPsych.randomization.sampleExGaussian(500,50,1/150,!0),correct:r==e.choices[e.target[0]][e.target[1]]},a=this.jsPsych.pluginAPI.mergeSimulationData(s,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,a),a}simulate_data_only(e,t){const r=this.create_simulation_data(e,t);this.jsPsych.finishTrial(r)}simulate_visual(e,t,r){const s=this.create_simulation_data(e,t),a=this.jsPsych.getDisplayElement();this.trial(a,e),r(),null!==s.rt&&this.jsPsych.pluginAPI.pressKey(s.response,s.rt)}}return r.info=t,r}(jsPsychModule);