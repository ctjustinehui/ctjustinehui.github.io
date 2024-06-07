var jsPsychImageSliderResponse=function(e){"use strict";const t={name:"image-slider-response",parameters:{stimulus:{type:e.ParameterType.IMAGE,pretty_name:"Stimulus","default":undefined},stimulus_height:{type:e.ParameterType.INT,pretty_name:"Image height","default":null},stimulus_width:{type:e.ParameterType.INT,pretty_name:"Image width","default":null},maintain_aspect_ratio:{type:e.ParameterType.BOOL,pretty_name:"Maintain aspect ratio","default":!0},min:{type:e.ParameterType.INT,pretty_name:"Min slider","default":0},max:{type:e.ParameterType.INT,pretty_name:"Max slider","default":100},slider_start:{type:e.ParameterType.INT,pretty_name:"Slider starting value","default":50},step:{type:e.ParameterType.INT,pretty_name:"Step","default":1},labels:{type:e.ParameterType.HTML_STRING,pretty_name:"Labels","default":[],array:!0},slider_width:{type:e.ParameterType.INT,pretty_name:"Slider width","default":null},button_label:{type:e.ParameterType.STRING,pretty_name:"Button label","default":"Continue",array:!1},require_movement:{type:e.ParameterType.BOOL,pretty_name:"Require movement","default":!1},prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Prompt","default":null},stimulus_duration:{type:e.ParameterType.INT,pretty_name:"Stimulus duration","default":null},trial_duration:{type:e.ParameterType.INT,pretty_name:"Trial duration","default":null},response_ends_trial:{type:e.ParameterType.BOOL,pretty_name:"Response ends trial","default":!0},render_on_canvas:{type:e.ParameterType.BOOL,pretty_name:"Render on canvas","default":!0}}};class s{constructor(e){this.jsPsych=e}trial(e,t){var s,i,a,r=7.5;if(t.render_on_canvas){var l=!1;if(e.hasChildNodes())for(;e.firstChild;)e.removeChild(e.firstChild);var n=document.createElement("div");n.id="jspsych-image-slider-response-wrapper",n.style.margin="100px 0px";var u=document.createElement("canvas");u.id="jspsych-image-slider-response-stimulus",u.style.margin="0",u.style.padding="0";var m=u.getContext("2d");(c=new Image).onload=(()=>{l||(_(),m.drawImage(c,0,0,i,s))}),c.src=t.stimulus;const _=()=>{null!==t.stimulus_height?(s=t.stimulus_height,null==t.stimulus_width&&t.maintain_aspect_ratio&&(i=c.naturalWidth*(t.stimulus_height/c.naturalHeight))):s=c.naturalHeight,null!==t.stimulus_width?(i=t.stimulus_width,null==t.stimulus_height&&t.maintain_aspect_ratio&&(s=c.naturalHeight*(t.stimulus_width/c.naturalWidth))):null!==t.stimulus_height&&t.maintain_aspect_ratio||(i=c.naturalWidth),u.height=s,u.width=i};_();var p=document.createElement("div");p.classList.add("jspsych-image-slider-response-container"),p.style.position="relative",p.style.margin="0 auto 3em auto",null!==t.slider_width&&(p.style.width=t.slider_width.toString()+"px"),a='<input type="range" class="jspsych-slider" value="'+t.slider_start+'" min="'+t.min+'" max="'+t.max+'" step="'+t.step+'" id="jspsych-image-slider-response-response"></input>',a+="<div>";for(var d=0;d<t.labels.length;d++){var o=100/(t.labels.length-1);a+='<div style="border: 1px solid transparent; display: inline-block; position: absolute; left:calc('+(y=d*(100/(t.labels.length-1)))+"% - ("+o+"% / 2) - "+(y-50)/50*100*r/100+"px); text-align: center; width: "+o+'%;">',a+='<span style="text-align: center; font-size: 80%;">'+t.labels[d]+"</span>",a+="</div>"}a+="</div>",p.innerHTML=a,n.insertBefore(u,n.firstElementChild),n.insertBefore(p,u.nextElementSibling),e.insertBefore(n,null),c.complete&&Number.isFinite(i)&&Number.isFinite(s)&&(m.drawImage(c,0,0,i,s),l=!0),null!==t.prompt&&e.insertAdjacentHTML("beforeend",t.prompt);var h=document.createElement("button");h.id="jspsych-image-slider-response-next",h.classList.add("jspsych-btn"),h.disabled=!!t.require_movement,h.innerHTML=t.button_label,e.insertBefore(h,e.nextElementSibling)}else{a='<div id="jspsych-image-slider-response-wrapper" style="margin: 100px 0px;">',a+='<div id="jspsych-image-slider-response-stimulus">',a+='<img src="'+t.stimulus+'" style="',null!==t.stimulus_height&&(a+="height:"+t.stimulus_height+"px; ",null==t.stimulus_width&&t.maintain_aspect_ratio&&(a+="width: auto; ")),null!==t.stimulus_width&&(a+="width:"+t.stimulus_width+"px; ",null==t.stimulus_height&&t.maintain_aspect_ratio&&(a+="height: auto; ")),a+='"></img>',a+="</div>",a+='<div class="jspsych-image-slider-response-container" style="position:relative; margin: 0 auto 3em auto; width:',null!==t.slider_width?a+=t.slider_width+"px;":a+="auto;",a+='">',a+='<input type="range" class="jspsych-slider" value="'+t.slider_start+'" min="'+t.min+'" max="'+t.max+'" step="'+t.step+'" id="jspsych-image-slider-response-response"></input>',a+="<div>";for(d=0;d<t.labels.length;d++){var y;o=100/(t.labels.length-1);a+='<div style="border: 1px solid transparent; display: inline-block; position: absolute; left:calc('+(y=d*(100/(t.labels.length-1)))+"% - ("+o+"% / 2) - "+(y-50)/50*100*r/100+"px); text-align: center; width: "+o+'%;">',a+='<span style="text-align: center; font-size: 80%;">'+t.labels[d]+"</span>",a+="</div>"}a+="</div>",a+="</div>",a+="</div>",null!==t.prompt&&(a+=t.prompt),a+='<button id="jspsych-image-slider-response-next" class="jspsych-btn" '+(t.require_movement?"disabled":"")+">"+t.button_label+"</button>",e.innerHTML=a;var c=e.querySelector("img");null!==t.stimulus_height?(s=t.stimulus_height,null==t.stimulus_width&&t.maintain_aspect_ratio&&(i=c.naturalWidth*(t.stimulus_height/c.naturalHeight))):s=c.naturalHeight,null!==t.stimulus_width?(i=t.stimulus_width,null==t.stimulus_height&&t.maintain_aspect_ratio&&(s=c.naturalHeight*(t.stimulus_width/c.naturalWidth))):null!==t.stimulus_height&&t.maintain_aspect_ratio||(i=c.naturalWidth),c.style.height=s.toString()+"px",c.style.width=i.toString()+"px"}var _={rt:null,response:null};if(t.require_movement){const t=()=>{e.querySelector("#jspsych-image-slider-response-next").disabled=!1};e.querySelector("#jspsych-image-slider-response-response").addEventListener("mousedown",t),e.querySelector("#jspsych-image-slider-response-response").addEventListener("touchstart",t),e.querySelector("#jspsych-image-slider-response-response").addEventListener("change",t)}const g=()=>{this.jsPsych.pluginAPI.clearAllTimeouts();var s={rt:_.rt,stimulus:t.stimulus,slider_start:t.slider_start,response:_.response};e.innerHTML="",this.jsPsych.finishTrial(s)};e.querySelector("#jspsych-image-slider-response-next").addEventListener("click",()=>{var s=performance.now();_.rt=Math.round(s-v),_.response=e.querySelector("#jspsych-image-slider-response-response").valueAsNumber,t.response_ends_trial?g():e.querySelector("#jspsych-image-slider-response-next").disabled=!0}),null!==t.stimulus_duration&&this.jsPsych.pluginAPI.setTimeout(()=>{e.querySelector("#jspsych-image-slider-response-stimulus").style.visibility="hidden"},t.stimulus_duration),null!==t.trial_duration&&this.jsPsych.pluginAPI.setTimeout(()=>{g()},t.trial_duration);var v=performance.now()}simulate(e,t,s,i){"data-only"==t&&(i(),this.simulate_data_only(e,s)),"visual"==t&&this.simulate_visual(e,s,i)}create_simulation_data(e,t){const s={stimulus:e.stimulus,slider_start:e.slider_start,response:this.jsPsych.randomization.randomInt(e.min,e.max),rt:this.jsPsych.randomization.sampleExGaussian(500,50,1/150,!0)},i=this.jsPsych.pluginAPI.mergeSimulationData(s,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,i),i}simulate_data_only(e,t){const s=this.create_simulation_data(e,t);this.jsPsych.finishTrial(s)}simulate_visual(e,t,s){const i=this.create_simulation_data(e,t),a=this.jsPsych.getDisplayElement();if(this.trial(a,e),s(),null!==i.rt){const e=a.querySelector("input[type='range']");setTimeout(()=>{this.jsPsych.pluginAPI.clickTarget(e),e.valueAsNumber=i.response},i.rt/2),this.jsPsych.pluginAPI.clickTarget(a.querySelector("button"),i.rt)}}}return s.info=t,s}(jsPsychModule);