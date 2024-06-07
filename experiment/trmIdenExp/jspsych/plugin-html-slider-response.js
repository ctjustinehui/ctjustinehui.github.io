var jsPsychHtmlSliderResponse=function(e){"use strict";const t={name:"html-slider-response",parameters:{stimulus:{type:e.ParameterType.HTML_STRING,pretty_name:"Stimulus","default":undefined},min:{type:e.ParameterType.INT,pretty_name:"Min slider","default":0},max:{type:e.ParameterType.INT,pretty_name:"Max slider","default":100},slider_start:{type:e.ParameterType.INT,pretty_name:"Slider starting value","default":50},step:{type:e.ParameterType.INT,pretty_name:"Step","default":1},labels:{type:e.ParameterType.HTML_STRING,pretty_name:"Labels","default":[],array:!0},slider_width:{type:e.ParameterType.INT,pretty_name:"Slider width","default":null},button_label:{type:e.ParameterType.STRING,pretty_name:"Button label","default":"Continue",array:!1},require_movement:{type:e.ParameterType.BOOL,pretty_name:"Require movement","default":!1},prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Prompt","default":null},stimulus_duration:{type:e.ParameterType.INT,pretty_name:"Stimulus duration","default":null},trial_duration:{type:e.ParameterType.INT,pretty_name:"Trial duration","default":null},response_ends_trial:{type:e.ParameterType.BOOL,pretty_name:"Response ends trial","default":!0}}};class s{constructor(e){this.jsPsych=e}trial(e,t){var s=7.5,r='<div id="jspsych-html-slider-response-wrapper" style="margin: 100px 0px;">';r+='<div id="jspsych-html-slider-response-stimulus">'+t.stimulus+"</div>",r+='<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ',null!==t.slider_width?r+="width:"+t.slider_width+"px;":r+="width:auto;",r+='">',r+='<input type="range" class="jspsych-slider" value="'+t.slider_start+'" min="'+t.min+'" max="'+t.max+'" step="'+t.step+'" id="jspsych-html-slider-response-response"></input>',r+="<div>";for(var l=0;l<t.labels.length;l++){var i=100/(t.labels.length-1),a=l*(100/(t.labels.length-1));r+='<div style="border: 1px solid transparent; display: inline-block; position: absolute; left:calc('+a+"% - ("+i+"% / 2) - "+(a-50)/50*100*s/100+"px); text-align: center; width: "+i+'%;">',r+='<span style="text-align: center; font-size: 80%;">'+t.labels[l]+"</span>",r+="</div>"}r+="</div>",r+="</div>",r+="</div>",null!==t.prompt&&(r+=t.prompt),r+='<button id="jspsych-html-slider-response-next" class="jspsych-btn" '+(t.require_movement?"disabled":"")+">"+t.button_label+"</button>",e.innerHTML=r;var n={rt:null,response:null};if(t.require_movement){const t=()=>{e.querySelector("#jspsych-html-slider-response-next").disabled=!1};e.querySelector("#jspsych-html-slider-response-response").addEventListener("mousedown",t),e.querySelector("#jspsych-html-slider-response-response").addEventListener("touchstart",t),e.querySelector("#jspsych-html-slider-response-response").addEventListener("change",t)}const u=()=>{this.jsPsych.pluginAPI.clearAllTimeouts();var s={rt:n.rt,stimulus:t.stimulus,slider_start:t.slider_start,response:n.response};e.innerHTML="",this.jsPsych.finishTrial(s)};e.querySelector("#jspsych-html-slider-response-next").addEventListener("click",()=>{var s=performance.now();n.rt=Math.round(s-p),n.response=e.querySelector("#jspsych-html-slider-response-response").valueAsNumber,t.response_ends_trial?u():e.querySelector("#jspsych-html-slider-response-next").disabled=!0}),null!==t.stimulus_duration&&this.jsPsych.pluginAPI.setTimeout(()=>{e.querySelector("#jspsych-html-slider-response-stimulus").style.visibility="hidden"},t.stimulus_duration),null!==t.trial_duration&&this.jsPsych.pluginAPI.setTimeout(u,t.trial_duration);var p=performance.now()}simulate(e,t,s,r){"data-only"==t&&(r(),this.simulate_data_only(e,s)),"visual"==t&&this.simulate_visual(e,s,r)}create_simulation_data(e,t){const s={stimulus:e.stimulus,slider_start:e.slider_start,response:this.jsPsych.randomization.randomInt(e.min,e.max),rt:this.jsPsych.randomization.sampleExGaussian(500,50,1/150,!0)},r=this.jsPsych.pluginAPI.mergeSimulationData(s,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,r),r}simulate_data_only(e,t){const s=this.create_simulation_data(e,t);this.jsPsych.finishTrial(s)}simulate_visual(e,t,s){const r=this.create_simulation_data(e,t),l=this.jsPsych.getDisplayElement();if(this.trial(l,e),s(),null!==r.rt){const e=l.querySelector("input[type='range']");setTimeout(()=>{this.jsPsych.pluginAPI.clickTarget(e),e.valueAsNumber=r.response},r.rt/2),this.jsPsych.pluginAPI.clickTarget(l.querySelector("button"),r.rt)}}}return s.info=t,s}(jsPsychModule);