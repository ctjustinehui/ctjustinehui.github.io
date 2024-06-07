var jsPsychVirtualChinrest=function(e){"use strict";const t={name:"virtual-chinrest",parameters:{resize_units:{type:e.ParameterType.SELECT,pretty_name:"Resize units",options:["none","cm","inch","deg"],"default":"none"},pixels_per_unit:{type:e.ParameterType.INT,pretty_name:"Pixels per unit","default":100},adjustment_prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Adjustment prompt","default":'\n          <div style="text-align: left;">\n          <p>Click and drag the lower right corner of the image until it is the same size as a credit card held up to the screen.</p>\n          <p>You can use any card that is the same size as a credit card, like a membership card or driver\'s license.</p>\n          <p>If you do not have access to a real card you can use a ruler to measure the image width to 3.37 inches or 85.6 mm.</p>\n          </div>'},adjustment_button_prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Adjustment button prompt","default":"Click here when the image is the correct size"},item_path:{type:e.ParameterType.IMAGE,pretty_name:"Item path","default":null,preload:!1},item_height_mm:{type:e.ParameterType.FLOAT,pretty_name:"Item height (mm)","default":53.98},item_width_mm:{type:e.ParameterType.FLOAT,pretty_name:"Item width (mm)","default":85.6},item_init_size:{type:e.ParameterType.INT,pretty_name:"Initial Size","default":250},blindspot_reps:{type:e.ParameterType.INT,pretty_name:"Blindspot measurement repetitions","default":5},blindspot_prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Blindspot prompt","default":'\n          <p>Now we will quickly measure how far away you are sitting.</p>\n          <div style="text-align: left">\n            <ol>\n              <li>Put your left hand on the <b>space bar</b>.</li>\n              <li>Cover your right eye with your right hand.</li>\n              <li>Using your left eye, focus on the black square. Keep your focus on the black square.</li>\n              <li>The <span style="color: red; font-weight: bold;">red ball</span> will disappear as it moves from right to left. Press the space bar as soon as the ball disappears.</li>\n            </ol>\n          </div>\n          <p>Press the space bar when you are ready to begin.</p>\n          '},blindspot_measurements_prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Blindspot measurements prompt","default":"Remaining measurements: "},viewing_distance_report:{type:e.ParameterType.HTML_STRING,pretty_name:"Viewing distance report","default":"<p>Based on your responses, you are sitting about <span id='distance-estimate' style='font-weight: bold;'></span> from the screen.</p><p>Does that seem about right?</p>"},redo_measurement_button_label:{type:e.ParameterType.HTML_STRING,pretty_name:"Re-do measurement button label","default":"No, that is not close. Try again."},blindspot_done_prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Blindspot done prompt","default":"Yes"}}};class i{constructor(e){this.jsPsych=e,this.ball_size=30,this.ball=null,this.container=null,this.reps_remaining=0,this.ball_animation_frame_id=null}trial(e,t){function i(){function t(){d=!1}function i(e){e.preventDefault(),d=!0,r=e.pageX,a=e.pageY,o=parseInt(p.style.width),l=parseInt(p.style.height)}function s(e){if(d){let t=e.pageX-r,i=e.pageY-a;Math.abs(t)>=Math.abs(i)?(p.style.width=Math.round(Math.max(20,o+2*t))+"px",p.style.height=Math.round(Math.max(20,o+2*t)/m)+"px"):(p.style.height=Math.round(Math.max(20,l+2*i))+"px",p.style.width=Math.round(m*Math.max(20,l+2*i))+"px")}}e.querySelector("#content").innerHTML=u;let r,a,o,l,d=!1;const p=e.querySelector("#item");document.addEventListener("mouseup",t),e.querySelector("#jspsych-resize-handle").addEventListener("mousedown",i),e.addEventListener("mousemove",s),e.querySelector("#end_resize_phase").addEventListener("click",n)}function n(){const e=document.querySelector("#item").getBoundingClientRect().width;d.item_width_px=Math.round(e);const i=a(e);d.px2mm=o(i,2),t.blindspot_reps>0?f():T()}function s(){e.querySelector("#content").innerHTML=b,e.querySelector("#distance-estimate").innerHTML=`\n          ${Math.round(d.view_dist_mm/10)} cm (${Math.round(.0393701*d.view_dist_mm)} inches)\n        `,e.querySelector("#redo_blindspot").addEventListener("click",f),e.querySelector("#proceed").addEventListener("click",T)}function r(){d.item_width_deg=2*Math.atan(d.item_width_mm/2/d.view_dist_mm)*180/Math.PI,d.px2deg=d.item_width_px/d.item_width_deg;let e=0;switch(t.resize_units){case"cm":case"centimeters":e=10*d.px2mm;break;case"inch":case"inches":e=25.4*d.px2mm;break;case"deg":case"degrees":e=d.px2deg}if(e>0){let i=e/t.pixels_per_unit;document.getElementById("jspsych-content").style.transform="scale("+i+")",d.px2deg=d.px2deg/i,d.px2mm=d.px2mm/i,d.item_width_px=d.item_width_px/i,d.scale_factor=i}t.blindspot_reps>0?(d.win_width_deg=window.innerWidth/d.px2deg,d.win_height_deg=window.innerHeight/d.px2deg):(delete d.px2deg,delete d.item_width_deg)}function a(e){return e/d.item_width_mm}function o(e,t){return Number(Math.round(Number(e+"e"+t))+"e-"+t)}function l(e){const t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}if(!(t.blindspot_reps>0||"deg"!=t.resize_units&&"degrees"!=t.resize_units))return void console.error("Blindspot repetitions set to 0, so resizing to degrees of visual angle is not possible!");this.reps_remaining=t.blindspot_reps;let d={item_width_mm:t.item_width_mm,item_height_mm:t.item_height_mm},p={ball_pos:[],slider_clck:!1},m=t.item_width_mm/t.item_height_mm;const h=m<1?t.item_init_size:Math.round(t.item_init_size/m),c=m<1?Math.round(t.item_init_size*m):t.item_init_size,_=Math.round(.1*c);let u=`\n        <div id="page-size">\n          <div id="item" style="border: none; height: ${h}px; width: ${c}px; margin: 5px auto; background-color: #ddd; position: relative; ${null===t.item_path?"":`background-image: url(${t.item_path}); background-size: 100% auto; background-repeat: no-repeat;`}">\n            <div id="jspsych-resize-handle" style="cursor: nwse-resize; background-color: none; width: ${_}px; height: ${_}px; border: 5px solid red; border-left: 0; border-top: 0; position: absolute; bottom: 0; right: 0;">\n            </div>\n          </div>\n          ${t.adjustment_prompt}\n          <button id="end_resize_phase" class="jspsych-btn">\n            ${t.adjustment_button_prompt}\n          </button>\n        </div>\n      `,y=`\n        <div id="blind-spot">\n          ${t.blindspot_prompt}\n          <div id="svgDiv" style="height:100px; position:relative;"></div>\n          <button class="btn btn-primary" id="proceed" style="display:none;"> +\n            ${t.blindspot_done_prompt} +\n          </button>\n          ${t.blindspot_measurements_prompt} \n          <div id="click" style="display:inline; color: red"> ${t.blindspot_reps} </div>\n        </div>`,b=`\n        <div id="distance-report">\n          <div id="info-h">\n            ${t.viewing_distance_report}\n          </div>\n          <button id="redo_blindspot" class="jspsych-btn">${t.redo_measurement_button_label}</button>\n          <button id="proceed" class="jspsych-btn">${t.blindspot_done_prompt}</button>\n        </div>\n      `;e.innerHTML='<div id="content" style="width: 900px; margin: 0 auto;"></div>';const g=performance.now();i();const f=()=>{p={ball_pos:[],slider_clck:!1},e.querySelector("#content").innerHTML=y,this.container=e.querySelector("#svgDiv"),M(),v()},v=()=>{const e=.85*(this.container.getBoundingClientRect().width-this.ball_size);this.ball.style.left=`${e}px`,this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:w,valid_responses:[" "],rt_method:"performance",allow_held_key:!1,persist:!1})},w=()=>{this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:P,valid_responses:[" "],rt_method:"performance",allow_held_key:!1,persist:!1}),this.ball_animation_frame_id=requestAnimationFrame(z)},x=()=>{const e=13.5,i=p.ball_pos.reduce((e,t)=>e+t,0),n=p.ball_pos.length;p.avg_ball_pos=o(i/n,2);const r=(p.square_pos-p.avg_ball_pos)/d.px2mm/Math.tan(k(e));d.view_dist_mm=o(r,2),"none"==t.viewing_distance_report?T():s()},T=()=>{d.rt=Math.round(performance.now()-g),this.jsPsych.pluginAPI.cancelAllKeyboardResponses(),r(),e.innerHTML="",this.jsPsych.finishTrial(d)},M=()=>{this.container.innerHTML=`\n        <div id="virtual-chinrest-circle" style="position: absolute; background-color: #f00; width: ${this.ball_size}px; height: ${this.ball_size}px; border-radius:${this.ball_size}px;"></div>\n        <div id="virtual-chinrest-square" style="position: absolute; background-color: #000; width: ${this.ball_size}px; height: ${this.ball_size}px;"></div>\n      `;const e=this.container.querySelector("#virtual-chinrest-circle"),t=this.container.querySelector("#virtual-chinrest-square"),i=this.container.getBoundingClientRect().width-this.ball_size,n=.85*i;e.style.left=`${n}px`,t.style.left=`${i}px`,this.ball=e,p.square_pos=o(l(t).x,2)},z=()=>{const e=-2,t=parseInt(this.ball.style.left);this.ball.style.left=`${t+e}px`,this.ball_animation_frame_id=requestAnimationFrame(z)},P=()=>{cancelAnimationFrame(this.ball_animation_frame_id),p.ball_pos.push(o(l(this.ball).x,2)),this.reps_remaining--,document.querySelector("#click").textContent=Math.max(this.reps_remaining,0).toString(),this.reps_remaining<=0?x():v()},k=e=>e*Math.PI/180}}return i.info=t,i}(jsPsychModule);