var jsPsychMirrorCamera=function(t){"use strict";const e={name:"mirror-camera",parameters:{prompt:{type:t.ParameterType.HTML_STRING,"default":null},button_label:{type:t.ParameterType.STRING,"default":"Continue"},height:{type:t.ParameterType.INT,"default":null},width:{type:t.ParameterType.INT,"default":null},mirror_camera:{type:t.ParameterType.BOOL,"default":!0}}};class r{constructor(t){this.jsPsych=t}trial(t,e){this.stream=this.jsPsych.pluginAPI.getCameraStream(),t.innerHTML=`\n      <video autoplay playsinline id="jspsych-mirror-camera-video" width="${e.width?e.width:"auto"}" height="${e.height?e.height:"auto"}" ${e.mirror_camera?'style="transform: rotateY(180deg);"':""}></video>\n      ${e.prompt?`<div id="jspsych-mirror-camera-prompt">${e.prompt}</div>`:""}\n      <p><button class="jspsych-btn" id="btn-continue">${e.button_label}</button></p>\n    `,t.querySelector("#jspsych-mirror-camera-video").srcObject=this.stream,t.querySelector("#btn-continue").addEventListener("click",()=>{this.finish(t)}),this.start_time=performance.now()}finish(t){t.innerHTML="",this.jsPsych.finishTrial({rt:performance.now()-this.start_time})}}return r.info=e,r}(jsPsychModule);