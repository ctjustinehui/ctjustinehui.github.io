var jsPsychMaxdiff=function(e){"use strict";const t={name:"maxdiff",parameters:{alternatives:{type:e.ParameterType.STRING,pretty_name:"Alternatives",array:!0,"default":undefined},labels:{type:e.ParameterType.STRING,array:!0,pretty_name:"Labels","default":undefined},randomize_alternative_order:{type:e.ParameterType.BOOL,pretty_name:"Randomize Alternative Order","default":!1},preamble:{type:e.ParameterType.HTML_STRING,pretty_name:"Preamble","default":""},button_label:{type:e.ParameterType.STRING,pretty_name:"Button Label","default":"Continue"},required:{type:e.ParameterType.BOOL,pretty_name:"Required","default":!1}}};class a{constructor(e){this.jsPsych=e}trial(e,t){var a="";a+='<style id="jspsych-maxdiff-css">',a+=".jspsych-maxdiff-statement {display:block; font-size: 16px; padding-top: 40px; margin-bottom:10px;}table.jspsych-maxdiff-table {border-collapse: collapse; padding: 15px; margin-left: auto; margin-right: auto;}table.jspsych-maxdiff-table td, th {border-bottom: 1px solid #dddddd; text-align: center; padding: 8px;}table.jspsych-maxdiff-table tr:nth-child(even) {background-color: #dddddd;}",a+="</style>",null!==t.preamble&&(a+='<div id="jspsych-maxdiff-preamble" class="jspsych-maxdiff-preamble">'+t.preamble+"</div>"),a+='<form id="jspsych-maxdiff-form">';for(var s=[],r=0;r<t.alternatives.length;r++)s.push(r);t.randomize_alternative_order&&(s=this.jsPsych.randomization.shuffle(s));var i='<table class="jspsych-maxdiff-table"><tr><th id="jspsych-maxdiff-left-label">'+t.labels[0]+'</th><th></th><th id="jspsych-maxdiff-right-label">'+t.labels[1]+"</th></tr>";for(r=0;r<t.alternatives.length;r++){var l=t.alternatives[s[r]];i+='<tr><td><input class= "jspsych-maxdiff-alt-'+r.toString()+'" type="radio" name="left" data-name = '+s[r].toString()+" /><br></td>",i+='<td id="jspsych-maxdiff-alternative-'+r.toString()+'">'+l+"</td>",i+='<td><input class= "jspsych-maxdiff-alt-'+r.toString()+'" type="radio" name="right" data-name = '+s[r].toString()+" /><br></td></tr>"}a+=i+="</table><br><br>",a+='<input type="submit" id="jspsych-maxdiff-next" class="jspsych-maxdiff jspsych-btn" '+(1==t.required?'disabled = "disabled"':"")+' value="'+t.button_label+'"></input>',a+="</form>",e.innerHTML=a,["left","right"].forEach(e=>{document.getElementsByName(e).forEach(e=>{e.addEventListener("click",()=>{var a="left"==e.name?"right":"left",s=document.getElementsByClassName(e.className).namedItem(a);if(s.checked&&(s.checked=!1),t.required){var r=Array.from(document.getElementsByName("left")).some(e=>e.checked),i=Array.from(document.getElementsByName("right")).some(e=>e.checked);document.getElementById("jspsych-maxdiff-next").disabled=!r||!i}})})}),e.querySelector("#jspsych-maxdiff-form").addEventListener("submit",a=>{function s(a){var s=e.querySelectorAll('[name="'+a+'"]:checked')[0];if(s===undefined)return null;var r=parseInt(s.getAttribute("data-name"));return t.alternatives[r]}a.preventDefault();var r=performance.now(),i={rt:Math.round(r-n),labels:{left:t.labels[0],right:t.labels[1]},response:{left:s("left"),right:s("right")}};e.innerHTML="",this.jsPsych.finishTrial(i)});var n=performance.now()}simulate(e,t,a,s){"data-only"==t&&(s(),this.simulate_data_only(e,a)),"visual"==t&&this.simulate_visual(e,a,s)}create_simulation_data(e,t){const a=this.jsPsych.randomization.sampleWithoutReplacement(e.alternatives,2),s={left:null,right:null};!e.required&&this.jsPsych.randomization.sampleBernoulli(.1)&&(a.pop(),this.jsPsych.randomization.sampleBernoulli(.8)&&a.pop()),1==a.length&&(this.jsPsych.randomization.sampleBernoulli(.5)?s.left=a[0]:s.right=a[0]),2==a.length&&(s.left=a[0],s.right=a[1]);const r={rt:this.jsPsych.randomization.sampleExGaussian(3e3,300,1/300,!0),labels:e.labels,response:s},i=this.jsPsych.pluginAPI.mergeSimulationData(r,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,i),i}simulate_data_only(e,t){const a=this.create_simulation_data(e,t);this.jsPsych.finishTrial(a)}simulate_visual(e,t,a){const s=this.create_simulation_data(e,t),r=this.jsPsych.getDisplayElement();this.trial(r,e),a();const i=[...r.querySelectorAll("[id^=jspsych-maxdiff-alternative]")].map(e=>e.innerHTML);if(null!==s.response.left){const e=i.indexOf(s.response.left);this.jsPsych.pluginAPI.clickTarget(r.querySelector(`.jspsych-maxdiff-alt-${e}[name="left"]`),s.rt/3)}if(null!==s.response.right){const e=i.indexOf(s.response.right);this.jsPsych.pluginAPI.clickTarget(r.querySelector(`.jspsych-maxdiff-alt-${e}[name="right"]`),s.rt/3*2)}this.jsPsych.pluginAPI.clickTarget(r.querySelector("#jspsych-maxdiff-next"),s.rt)}}return a.info=t,a}(jsPsychModule);