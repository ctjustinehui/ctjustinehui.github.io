var jsPsychCategorizeHtml=function(e){"use strict";const t={name:"categorize-html",parameters:{stimulus:{type:e.ParameterType.HTML_STRING,pretty_name:"Stimulus","default":undefined},key_answer:{type:e.ParameterType.KEY,pretty_name:"Key answer","default":undefined},choices:{type:e.ParameterType.KEYS,pretty_name:"Choices","default":"ALL_KEYS"},text_answer:{type:e.ParameterType.HTML_STRING,pretty_name:"Text answer","default":null},correct_text:{type:e.ParameterType.HTML_STRING,pretty_name:"Correct text","default":"<p class='feedback'>Correct</p>"},incorrect_text:{type:e.ParameterType.HTML_STRING,pretty_name:"Incorrect text","default":"<p class='feedback'>Incorrect</p>"},prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Prompt","default":null},force_correct_button_press:{type:e.ParameterType.BOOL,pretty_name:"Force correct button press","default":!1},show_stim_with_feedback:{type:e.ParameterType.BOOL,"default":!0,no_function:!1},show_feedback_on_timeout:{type:e.ParameterType.BOOL,pretty_name:"Show feedback on timeout","default":!1},timeout_message:{type:e.ParameterType.HTML_STRING,pretty_name:"Timeout message","default":"<p>Please respond faster.</p>"},stimulus_duration:{type:e.ParameterType.INT,pretty_name:"Stimulus duration","default":null},trial_duration:{type:e.ParameterType.INT,pretty_name:"Trial duration","default":null},feedback_duration:{type:e.ParameterType.INT,pretty_name:"Feedback duration","default":2e3}}};class s{constructor(e){this.jsPsych=e}trial(e,t){e.innerHTML='<div id="jspsych-categorize-html-stimulus" class="jspsych-categorize-html-stimulus">'+t.stimulus+"</div>",null!==t.stimulus_duration&&this.jsPsych.pluginAPI.setTimeout(()=>{e.querySelector("#jspsych-categorize-html-stimulus").style.visibility="hidden"},t.stimulus_duration),null!==t.prompt&&(e.innerHTML+=t.prompt);var s={};const r=r=>{this.jsPsych.pluginAPI.clearAllTimeouts(),this.jsPsych.pluginAPI.cancelAllKeyboardResponses();var a=!1;this.jsPsych.pluginAPI.compareKeys(t.key_answer,r.key)&&(a=!0),s={rt:r.rt,correct:a,stimulus:t.stimulus,response:r.key},e.innerHTML="";var n=null==r.rt;i(a,n)};this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:r,valid_responses:t.choices,rt_method:"performance",persist:!1,allow_held_key:!1}),null!==t.trial_duration&&this.jsPsych.pluginAPI.setTimeout(()=>{r({key:null,rt:null})},t.trial_duration);const a=()=>{e.innerHTML="",this.jsPsych.finishTrial(s)},i=(s,r)=>{if(r&&!t.show_feedback_on_timeout)e.innerHTML+=t.timeout_message;else{t.show_stim_with_feedback&&(e.innerHTML='<div id="jspsych-categorize-html-stimulus" class="jspsych-categorize-html-stimulus">'+t.stimulus+"</div>");var i="";i=s?t.correct_text.replace("%ANS%",t.text_answer):t.incorrect_text.replace("%ANS%",t.text_answer),e.innerHTML+=i}if(t.force_correct_button_press&&!1===s&&(r&&t.show_feedback_on_timeout||!r)){var n=()=>{a()};this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:n,valid_responses:[t.key_answer],rt_method:"performance",persist:!1,allow_held_key:!1})}else this.jsPsych.pluginAPI.setTimeout(a,t.feedback_duration)}}simulate(e,t,s,r){"data-only"==t&&(r(),this.simulate_data_only(e,s)),"visual"==t&&this.simulate_visual(e,s,r)}create_simulation_data(e,t){const s=this.jsPsych.pluginAPI.getValidKey(e.choices),r={stimulus:e.stimulus,response:s,rt:this.jsPsych.randomization.sampleExGaussian(500,50,1/150,!0),correct:s==e.key_answer},a=this.jsPsych.pluginAPI.mergeSimulationData(r,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,a),a}simulate_data_only(e,t){const s=this.create_simulation_data(e,t);this.jsPsych.finishTrial(s)}simulate_visual(e,t,s){const r=this.create_simulation_data(e,t),a=this.jsPsych.getDisplayElement();this.trial(a,e),s(),null!==r.rt&&this.jsPsych.pluginAPI.pressKey(r.response,r.rt),e.force_correct_button_press&&!r.correct&&this.jsPsych.pluginAPI.pressKey(e.key_answer,r.rt+e.feedback_duration/2)}}return s.info=t,s}(jsPsychModule);