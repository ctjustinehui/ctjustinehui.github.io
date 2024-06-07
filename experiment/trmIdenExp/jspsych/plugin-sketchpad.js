var jsPsychSketchpad=function(t){"use strict";const e={name:"sketchpad",parameters:{canvas_shape:{type:t.ParameterType.STRING,"default":"rectangle"},canvas_width:{type:t.ParameterType.INT,"default":500},canvas_height:{type:t.ParameterType.INT,"default":500},canvas_diameter:{type:t.ParameterType.INT,"default":500},canvas_border_width:{type:t.ParameterType.INT,"default":0},canvas_border_color:{type:t.ParameterType.STRING,"default":"#000"},background_image:{type:t.ParameterType.IMAGE,"default":null},background_color:{type:t.ParameterType.STRING,"default":"#ffffff"},stroke_width:{type:t.ParameterType.INT,"default":2},stroke_color:{type:t.ParameterType.STRING,"default":"#000000"},stroke_color_palette:{type:t.ParameterType.STRING,array:!0,"default":[]},prompt:{type:t.ParameterType.HTML_STRING,"default":null},prompt_location:{type:t.ParameterType.STRING,"default":"abovecanvas"},save_final_image:{type:t.ParameterType.BOOL,"default":!0},save_strokes:{type:t.ParameterType.BOOL,"default":!0},key_to_draw:{type:t.ParameterType.KEY,"default":null},show_finished_button:{type:t.ParameterType.BOOL,"default":!0},finished_button_label:{type:t.ParameterType.STRING,"default":"Finished"},show_clear_button:{type:t.ParameterType.BOOL,"default":!0},clear_button_label:{type:t.ParameterType.STRING,"default":"Clear"},show_undo_button:{type:t.ParameterType.BOOL,"default":!0},undo_button_label:{type:t.ParameterType.STRING,"default":"Undo"},show_redo_button:{type:t.ParameterType.BOOL,"default":!0},redo_button_label:{type:t.ParameterType.STRING,"default":"Redo"},choices:{type:t.ParameterType.KEYS,"default":"NO_KEYS"},trial_duration:{type:t.ParameterType.INT,"default":null},show_countdown_trial_duration:{type:t.ParameterType.BOOL,"default":!1},countdown_timer_html:{type:t.ParameterType.HTML_STRING,"default":'<span id="sketchpad-timer"></span> remaining'}}};class s{constructor(t){this.jsPsych=t,this.is_drawing=!1,this.strokes=[],this.stroke=[],this.undo_history=[],this.mouse_position={x:0,y:0},this.draw_key_held=!1}trial(t,e,s){return this.display=t,this.params=e,this.current_stroke_color=e.stroke_color,this.init_display(),this.setup_event_listeners(),this.add_background_color(),this.add_background_image().then(()=>{s()}),this.start_time=performance.now(),this.set_trial_duration_timer(),new Promise(t=>{this.trial_finished_handler=t})}init_display(){let t;if(this.add_css(),"rectangle"==this.params.canvas_shape)t=`\n        <canvas id="sketchpad-canvas" \n        width="${this.params.canvas_width}" \n        height="${this.params.canvas_height}" \n        class="sketchpad-rectangle"></canvas>\n      `;else{if("circle"!=this.params.canvas_shape)throw new Error('`canvas_shape` parameter in sketchpad plugin must be either "rectangle" or "circle"');t=`\n        <canvas id="sketchpad-canvas" \n        width="${this.params.canvas_diameter}" \n        height="${this.params.canvas_diameter}" \n        class="sketchpad-circle">\n        </canvas>\n      `}let e='<div id="sketchpad-controls">';e+='<div id="sketchpad-color-palette">';for(const t of this.params.stroke_color_palette)e+=`<button class="sketchpad-color-select" data-color="${t}" style="background-color:${t};"></button>`;e+="</div>",e+='<div id="sketchpad-actions">',this.params.show_clear_button&&(e+=`<button class="jspsych-btn" id="sketchpad-clear" disabled>${this.params.clear_button_label}</button>`),this.params.show_undo_button&&(e+=`<button class="jspsych-btn" id="sketchpad-undo" disabled>${this.params.undo_button_label}</button>`,this.params.show_redo_button&&(e+=`<button class="jspsych-btn" id="sketchpad-redo" disabled>${this.params.redo_button_label}</button>`)),t+=e+="</div></div>";let s="";this.params.show_finished_button&&(s=`<p id="finish-btn"><button class="jspsych-btn" id="sketchpad-end">${this.params.finished_button_label}</button></p>`);let a,i="";this.params.show_countdown_trial_duration&&this.params.trial_duration&&(i=`<p id="countdown-timer">${this.params.countdown_timer_html}</p>`),null!==this.params.prompt?("abovecanvas"==this.params.prompt_location&&(a=this.params.prompt+i+t+s),"belowcanvas"==this.params.prompt_location&&(a=i+t+this.params.prompt+s),"belowbutton"==this.params.prompt_location&&(a=i+t+s+this.params.prompt)):a=i+t+s,this.display.innerHTML=a,this.sketchpad=this.display.querySelector("#sketchpad-canvas"),this.ctx=this.sketchpad.getContext("2d")}setup_event_listeners(){document.addEventListener("pointermove",t=>{this.mouse_position={x:t.clientX,y:t.clientY}}),this.params.show_finished_button&&this.display.querySelector("#sketchpad-end").addEventListener("click",()=>{this.end_trial("button")}),this.sketchpad.addEventListener("pointerdown",this.start_draw),this.sketchpad.addEventListener("pointermove",this.move_draw),this.sketchpad.addEventListener("pointerup",this.end_draw),this.sketchpad.addEventListener("pointerleave",this.end_draw),this.sketchpad.addEventListener("pointercancel",this.end_draw),null!==this.params.key_to_draw&&(document.addEventListener("keydown",t=>{t.key!=this.params.key_to_draw||this.is_drawing||this.draw_key_held||(this.draw_key_held=!0,document.elementFromPoint(this.mouse_position.x,this.mouse_position.y)==this.sketchpad&&this.sketchpad.dispatchEvent(new PointerEvent("pointerdown",{clientX:this.mouse_position.x,clientY:this.mouse_position.y})))}),document.addEventListener("keyup",t=>{t.key==this.params.key_to_draw&&(this.draw_key_held=!1,document.elementFromPoint(this.mouse_position.x,this.mouse_position.y)==this.sketchpad&&this.sketchpad.dispatchEvent(new PointerEvent("pointerup",{clientX:this.mouse_position.x,clientY:this.mouse_position.y})))})),this.params.show_undo_button&&(this.display.querySelector("#sketchpad-undo").addEventListener("click",this.undo),this.params.show_redo_button&&this.display.querySelector("#sketchpad-redo").addEventListener("click",this.redo)),this.params.show_clear_button&&this.display.querySelector("#sketchpad-clear").addEventListener("click",this.clear);const t=Array.from(this.display.querySelectorAll(".sketchpad-color-select"));for(const e of t)e.addEventListener("click",t=>{const e=t.target;this.current_stroke_color=e.getAttribute("data-color")});this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:this.after_key_response,valid_responses:this.params.choices,persist:!1,allow_held_key:!1})}add_css(){document.querySelector("head").insertAdjacentHTML("beforeend",`<style id="sketchpad-styles">\n        #sketchpad-controls {\n          line-height: 1; \n          width:${"rectangle"==this.params.canvas_shape?this.params.canvas_width+2*this.params.canvas_border_width:this.params.canvas_diameter+2*this.params.canvas_border_width}px; \n          display: flex; \n          justify-content: space-between; \n          flex-wrap: wrap;\n          margin: auto;\n        }\n        #sketchpad-color-palette { \n          display: inline-block; text-align:left; flex-grow: 1;\n        }\n        .sketchpad-color-select { \n          cursor: pointer; height: 33px; width: 33px; border-radius: 4px; padding: 0; border: 1px solid #ccc; \n        }\n        #sketchpad-actions {\n          display:inline-block; text-align:right; flex-grow: 1;\n        }\n        #sketchpad-actions button {\n          margin-left: 4px;\n        }\n        #sketchpad-canvas {\n          touch-action: none;\n          border: ${this.params.canvas_border_width}px solid ${this.params.canvas_border_color};\n        }\n        .sketchpad-circle {\n          border-radius: ${this.params.canvas_diameter/2}px;\n        }\n        #countdown-timer {\n          width:${"rectangle"==this.params.canvas_shape?this.params.canvas_width+2*this.params.canvas_border_width:this.params.canvas_diameter+2*this.params.canvas_border_width}px; \n          text-align: right;\n          font-size: 12px; \n          margin-bottom: 0.2em;\n        }\n      </style>`)}add_background_color(){this.ctx.fillStyle=this.params.background_color,"rectangle"==this.params.canvas_shape&&this.ctx.fillRect(0,0,this.params.canvas_width,this.params.canvas_height),"circle"==this.params.canvas_shape&&this.ctx.fillRect(0,0,this.params.canvas_diameter,this.params.canvas_diameter)}add_background_image(){return new Promise(t=>{null!==this.params.background_image?(this.background_image=new Image,this.background_image.src=this.params.background_image,this.background_image.onload=(()=>{this.ctx.drawImage(this.background_image,0,0),t(!0)})):t(!1)})}start_draw(t){this.is_drawing=!0;const e=Math.round(t.clientX-this.sketchpad.getBoundingClientRect().left),s=Math.round(t.clientY-this.sketchpad.getBoundingClientRect().top);this.undo_history=[],this.set_redo_btn_state(!1),this.ctx.beginPath(),this.ctx.moveTo(e,s),this.ctx.strokeStyle=this.current_stroke_color,this.ctx.lineJoin="round",this.ctx.lineWidth=this.params.stroke_width,this.stroke=[],this.stroke.push({x:e,y:s,color:this.current_stroke_color,action:"start",t:Math.round(performance.now()-this.start_time)}),this.sketchpad.releasePointerCapture(t.pointerId)}move_draw(t){if(this.is_drawing){const e=Math.round(t.clientX-this.sketchpad.getBoundingClientRect().left),s=Math.round(t.clientY-this.sketchpad.getBoundingClientRect().top);this.ctx.lineTo(e,s),this.ctx.stroke(),this.stroke.push({x:e,y:s,action:"move"})}}end_draw(t){this.is_drawing&&(this.stroke.push({action:"end",t:Math.round(performance.now()-this.start_time)}),this.strokes.push(this.stroke),this.set_undo_btn_state(!0),this.set_clear_btn_state(!0)),this.is_drawing=!1}render_drawing(){this.ctx.clearRect(0,0,this.sketchpad.width,this.sketchpad.height),this.add_background_color(),this.background_image&&this.ctx.drawImage(this.background_image,0,0);for(const t of this.strokes)for(const e of t)"start"==e.action&&(this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.strokeStyle=e.color,this.ctx.lineJoin="round",this.ctx.lineWidth=this.params.stroke_width),"move"==e.action&&(this.ctx.lineTo(e.x,e.y),this.ctx.stroke())}undo(){this.undo_history.push(this.strokes.pop()),this.set_redo_btn_state(!0),0==this.strokes.length&&this.set_undo_btn_state(!1),this.render_drawing()}redo(){this.strokes.push(this.undo_history.pop()),this.set_undo_btn_state(!0),0==this.undo_history.length&&this.set_redo_btn_state(!1),this.render_drawing()}clear(){this.strokes=[],this.undo_history=[],this.render_drawing(),this.set_redo_btn_state(!1),this.set_undo_btn_state(!1),this.set_clear_btn_state(!1)}set_undo_btn_state(t){this.params.show_undo_button&&(this.display.querySelector("#sketchpad-undo").disabled=!t)}set_redo_btn_state(t){this.params.show_undo_button&&this.params.show_redo_button&&(this.display.querySelector("#sketchpad-redo").disabled=!t)}set_clear_btn_state(t){this.params.show_clear_button&&(this.display.querySelector("#sketchpad-clear").disabled=!t)}set_trial_duration_timer(){null!==this.params.trial_duration&&(this.jsPsych.pluginAPI.setTimeout(()=>{this.end_trial()},this.params.trial_duration),this.params.show_countdown_trial_duration&&(this.timer_interval=setInterval(()=>{const t=this.params.trial_duration-(performance.now()-this.start_time);let e=Math.floor(t/1e3/60),s=Math.ceil((t-1e3*e*60)/1e3);60==s&&(s=0,e++);const a=e.toString(),i=s.toString().padStart(2,"0"),r=this.display.querySelector("#sketchpad-timer");r&&(r.innerHTML=`${a}:${i}`),t<=0&&(r&&(r.innerHTML="0:00"),clearInterval(this.timer_interval))},250)))}after_key_response(t){this.end_trial(t.key)}end_trial(t=null){this.jsPsych.pluginAPI.clearAllTimeouts(),this.jsPsych.pluginAPI.cancelAllKeyboardResponses(),clearInterval(this.timer_interval);const e={};e.rt=Math.round(performance.now()-this.start_time),e.response=t,this.params.save_final_image&&(e.png=this.sketchpad.toDataURL()),this.params.save_strokes&&(e.strokes=this.strokes),this.display.innerHTML="",document.querySelector("#sketchpad-styles").remove(),this.jsPsych.finishTrial(e),this.trial_finished_handler()}}return s.info=e,s}(jsPsychModule);