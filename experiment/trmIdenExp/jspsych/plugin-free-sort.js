var jsPsychFreeSort=function(e){"use strict";function t(e){let t,r,o=e.length;for(;0!==o;)r=Math.floor(Math.random()*o),t=e[o-=1],e[o]=e[r],e[r]=t;return e}function r(e,t,r){const o=(t-e)/(r-1);let a=[];for(let t=0;t<r;t++)a.push(e+o*t);return a}function o(e,t,r,o,a,s,i=!1){return i?Math.abs(e-r)<=a&&Math.abs(t-o)<=s:(e-r)*(e-r)*(s*s)+(t-o)*(t-o)*(a*a)<=a*a*(s*s)}function a(e,t){return{x:Math.floor(Math.random()*(e-1)),y:Math.floor(Math.random()*(t-1))}}const s={name:"free-sort",parameters:{stimuli:{type:e.ParameterType.IMAGE,pretty_name:"Stimuli","default":undefined,array:!0},stim_height:{type:e.ParameterType.INT,pretty_name:"Stimulus height","default":100},stim_width:{type:e.ParameterType.INT,pretty_name:"Stimulus width","default":100},scale_factor:{type:e.ParameterType.FLOAT,pretty_name:"Stimulus scaling factor","default":1.5},sort_area_height:{type:e.ParameterType.INT,pretty_name:"Sort area height","default":700},sort_area_width:{type:e.ParameterType.INT,pretty_name:"Sort area width","default":700},sort_area_shape:{type:e.ParameterType.SELECT,pretty_name:"Sort area shape",options:["square","ellipse"],"default":"ellipse"},prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Prompt","default":""},prompt_location:{type:e.ParameterType.SELECT,pretty_name:"Prompt location",options:["above","below"],"default":"above"},button_label:{type:e.ParameterType.STRING,pretty_name:"Button label","default":"Continue"},change_border_background_color:{type:e.ParameterType.BOOL,pretty_name:"Change border background color","default":!0},border_color_in:{type:e.ParameterType.STRING,pretty_name:"Border color - in","default":"#a1d99b"},border_color_out:{type:e.ParameterType.STRING,pretty_name:"Border color - out","default":"#fc9272"},border_width:{type:e.ParameterType.INT,pretty_name:"Border width","default":null},counter_text_unfinished:{type:e.ParameterType.HTML_STRING,pretty_name:"Counter text unfinished","default":"You still need to place %n% item%s% inside the sort area."},counter_text_finished:{type:e.ParameterType.HTML_STRING,pretty_name:"Counter text finished","default":"All items placed. Feel free to reposition items if necessary."},stim_starts_inside:{type:e.ParameterType.BOOL,pretty_name:"Stim starts inside","default":!1},column_spread_factor:{type:e.ParameterType.FLOAT,pretty_name:"column spread factor","default":1}}};class i{constructor(e){this.jsPsych=e}trial(e,s){function i(e){for(var t="",r=s.counter_text_unfinished.split("%"),o=0;o<r.length;o++)o%2==0?t+=r[o]:"n"==r[o]?t+=e.toString():"s"==r[o]&&e>1&&(t+="s");return t}var n=performance.now(),l=s.border_color_out,d=s.border_width,h=s.stimuli;0==s.change_border_background_color&&(l="#000000"),null==s.border_width&&(d=.03*s.sort_area_height);let c='<div id="jspsych-free-sort-arena" class="jspsych-free-sort-arena" style="position: relative; width:'+s.sort_area_width+"px; height:"+s.sort_area_height+'px; margin: auto;"</div>';c+='<div id="jspsych-free-sort-border" class="jspsych-free-sort-border" style="position: relative; width:'+.94*s.sort_area_width+"px; height:"+.94*s.sort_area_height+"px; border:"+d+"px solid "+l+"; margin: auto; line-height: 0em; ","ellipse"==s.sort_area_shape?c+='webkit-border-radius: 50%; moz-border-radius: 50%; border-radius: 50%"></div>':c+='webkit-border-radius: 0%; moz-border-radius: 0%; border-radius: 0%"></div>';const _='<div style="line-height: 1.0em;">'+s.prompt+'<p id="jspsych-free-sort-counter" style="display: inline-block;">'+i(h.length)+"</p></div>";"below"==s.prompt_location?c+=_:c=_+c,c+='<div><button id="jspsych-free-sort-done-btn" class="jspsych-btn" style="margin-top: 5px; margin-bottom: 15px; visibility: hidden;">'+s.button_label+"</button></div>",e.innerHTML=c;let p=[];if(!s.stim_starts_inside){let e=Math.ceil(Math.sqrt(h.length));e%2!=0&&(e+=1);var y=[],u=[];for(const t of r(0,s.sort_area_width-s.stim_width,e))for(const o of r(0,s.sort_area_height-s.stim_height,e))t>.5*(s.sort_area_width-s.stim_width)?y.push({x:t+s.sort_area_width*(.5*s.column_spread_factor),y:o}):u.push({x:t-s.sort_area_width*(.5*s.column_spread_factor),y:o});for(;y.length+u.length<h.length;)y=y.concat(y),u=u.concat(u);u=u.reverse(),h=t(h)}for(let t=0;t<h.length;t++){var m;m=s.stim_starts_inside?a(s.sort_area_width-s.stim_width,s.sort_area_height-s.stim_height):t%2==0?y[Math.floor(.5*t)]:u[Math.floor(.5*t)],e.querySelector("#jspsych-free-sort-arena").innerHTML+='<img src="'+h[t]+'" data-src="'+h[t]+'" class="jspsych-free-sort-draggable" draggable="false" id="jspsych-free-sort-draggable-'+t+'" style="position: absolute; cursor: move; width:'+s.stim_width+"px; height:"+s.stim_height+"px; top:"+m.y+"px; left:"+m.x+'px;"></img>',p.push({src:h[t],x:m.x,y:m.y})}const f=h.map(()=>s.stim_starts_inside),b=[];let g=!1;const T=Array.from(e.querySelectorAll(".jspsych-free-sort-draggable")),v=e.querySelector("#jspsych-free-sort-border"),w=e.querySelector("#jspsych-free-sort-done-btn");f.some(Boolean)&&s.change_border_background_color&&(v.style.borderColor=s.border_color_in),f.every(Boolean)&&(s.change_border_background_color&&(v.style.background=s.border_color_in),w.style.visibility="visible",e.querySelector("#jspsych-free-sort-counter").innerHTML=s.counter_text_finished);for(const t of T)t.addEventListener("pointerdown",function({clientX:t,clientY:r}){let a=t-this.offsetLeft,n=r-this.offsetTop-window.scrollY;this.style.transform="scale("+s.scale_factor+","+s.scale_factor+")";const d=({clientX:t,clientY:r})=>{g=o(t-a,r-n,.5*s.sort_area_width-.5*s.stim_width,.5*s.sort_area_height-.5*s.stim_height,.5*s.sort_area_width,.5*s.sort_area_height,"square"==s.sort_area_shape),this.style.top=Math.min(s.sort_area_height-.5*s.stim_height,Math.max(.5*-s.stim_height,r-n))+"px",this.style.left=Math.min(1.5*s.sort_area_width-s.stim_width,Math.max(.5*-s.sort_area_width,t-a))+"px",s.change_border_background_color&&(g?(v.style.borderColor=s.border_color_in,v.style.background="None"):(v.style.borderColor=l,v.style.background="None"));var d=parseInt(this.id.split("jspsych-free-sort-draggable-")[1],10);f.splice(d,1,g),f.every(Boolean)?(s.change_border_background_color&&(v.style.background=s.border_color_in),w.style.visibility="visible",e.querySelector("#jspsych-free-sort-counter").innerHTML=s.counter_text_finished):(v.style.background="none",w.style.visibility="hidden",e.querySelector("#jspsych-free-sort-counter").innerHTML=i(f.length-f.filter(Boolean).length))};document.addEventListener("pointermove",d);const h=()=>{document.removeEventListener("pointermove",d),this.style.transform="scale(1, 1)",s.change_border_background_color&&(f.every(Boolean)?(v.style.background=s.border_color_in,v.style.borderColor=s.border_color_in):(v.style.background="none",v.style.borderColor=l)),b.push({src:this.dataset.src,x:this.offsetLeft,y:this.offsetTop}),document.removeEventListener("pointerup",h)};document.addEventListener("pointerup",h)});e.querySelector("#jspsych-free-sort-done-btn").addEventListener("click",()=>{if(f.every(Boolean)){const t=performance.now(),r=Math.round(t-n),o=e.querySelectorAll(".jspsych-free-sort-draggable");let a=[];for(let e=0;e<o.length;e++)a.push({src:o[e].dataset.src,x:parseInt(o[e].style.left),y:parseInt(o[e].style.top)});const s={init_locations:p,moves:b,final_locations:a,rt:r};e.innerHTML="",this.jsPsych.finishTrial(s)}})}}return i.info=s,i}(jsPsychModule);