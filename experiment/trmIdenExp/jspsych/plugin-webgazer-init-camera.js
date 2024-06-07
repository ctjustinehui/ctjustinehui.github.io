var jsPsychWebgazerInitCamera=function(e){"use strict";const t={name:"webgazer-init-camera",parameters:{instructions:{type:e.ParameterType.HTML_STRING,"default":"\n            <p>Position your head so that the webcam has a good view of your eyes.</p>\n            <p>Center your face in the box and look directly towards the camera.</p>\n            <p>It is important that you try and keep your head reasonably still throughout the experiment, so please take a moment to adjust your setup to be comfortable.</p>\n            <p>When your face is centered in the box and the box is green, you can click to continue.</p>"},button_text:{type:e.ParameterType.STRING,"default":"Continue"}}};class r{constructor(e){this.jsPsych=e}trial(e,t,r){function n(){return!!document.querySelector("#webgazerFaceFeedbackBox")&&"green"==document.querySelector("#webgazerFaceFeedbackBox").style.borderColor}function o(e){e[0].target==document.querySelector("#webgazerFaceFeedbackBox")&&("attributes"==e[0].type&&"green"==e[0].target.style.borderColor&&(document.querySelector("#jspsych-wg-cont").disabled=!1),"attributes"==e[0].type&&"red"==e[0].target.style.borderColor&&(document.querySelector("#jspsych-wg-cont").disabled=!0))}let s;var a,i=performance.now();const c=()=>{this.jsPsych.extensions.webgazer.pause(),this.jsPsych.extensions.webgazer.hideVideo(),this.jsPsych.pluginAPI.clearAllTimeouts();var t={load_time:a};e.innerHTML="",document.querySelector("#webgazer-center-style").remove(),this.jsPsych.finishTrial(t),s()},u=()=>{r(),a=Math.round(performance.now()-i);var s='\n          <style id="webgazer-center-style">\n            #webgazerVideoContainer { top: 20px !important; left: calc(50% - 160px) !important;}\n          </style>\n        ';document.querySelector("head").insertAdjacentHTML("beforeend",s);var u="\n          <div id='webgazer-init-container' style='position: relative; width:100vw; height:100vh'>\n          </div>";if(e.innerHTML=u,this.jsPsych.extensions.webgazer.showVideo(),this.jsPsych.extensions.webgazer.resume(),e.querySelector("#webgazer-init-container").innerHTML=`\n          <div style='position: absolute; top: max(260px, 40%); left: calc(50% - 400px); width:800px;'>\n          ${t.instructions}\n          <button id='jspsych-wg-cont' class='jspsych-btn' disabled>${t.button_text}</button>\n          </div>`,n())document.querySelector("#jspsych-wg-cont").disabled=!1;else{var d=new MutationObserver(o);d.observe(document,{attributes:!0,attributeFilter:["style"],subtree:!0})}document.querySelector("#jspsych-wg-cont").addEventListener("click",()=>{d&&d.disconnect(),c()})};return this.jsPsych.extensions.webgazer.isInitialized()?u():this.jsPsych.extensions.webgazer.start().then(()=>{u()})["catch"](t=>{console.log(t),e.innerHTML="<p>The experiment cannot continue because the eye tracker failed to start.</p>\n              <p>This may be because of a technical problem or because you did not grant permission for the page to use your camera.</p>"}),new Promise(e=>{s=e})}}return r.info=t,r}(jsPsychModule);