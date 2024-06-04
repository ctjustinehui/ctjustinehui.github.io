jsPsych.plugins["vsl-animate-occlusion"]=function(){var e={};return jsPsych.pluginAPI.registerPreload("vsl-animate-occlusion","stimuli","image"),e.info={name:"vsl-animate-occlusion",description:"",parameters:{stimuli:{type:jsPsych.plugins.parameterType.IMAGE,pretty_name:"Stimuli","default":undefined,array:!0,description:"A stimulus is a path to an image file."},choices:{type:jsPsych.plugins.parameterType.KEYCODE,pretty_name:"Choices",array:!0,"default":jsPsych.ALL_KEYS,description:"This array contains the keys that the subject is allowed to press in order to respond to the stimulus. "},canvas_size:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Canvas size",array:!0,"default":[400,400],description:"Array specifying the width and height of the area that the animation will display in."},image_size:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Image size",array:!0,"default":[100,100],description:"Array specifying the width and height of the images to show."},initial_direction:{type:jsPsych.plugins.parameterType.SELECT,pretty_name:"Initial direction",choices:["left","right"],"default":"left",description:"Which direction the stimulus should move first."},occlude_center:{type:jsPsych.plugins.parameterType.BOOL,pretty_name:"Occlude center","default":!0,description:"If true, display a rectangle in the center of the screen that is just wide enough to occlude the image completely as it passes behind."},cycle_duration:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Cycle duration","default":1e3,description:"How long it takes for a stimulus in the sequence to make a complete cycle."},pre_movement_duration:{type:jsPsych.plugins.parameterType.INT,pretty_name:"Pre movement duration","default":500,description:"How long to wait before the stimuli starts moving from behind the center rectangle."}}},e.trial=function(e,i){function t(){if(i.stimuli.length==r)s();else{var e=n[c];c=0===c?1:0;var a=i.stimuli[r];r++,l.animate(e[0].params,e[0].ms,mina.linear,function(){l.animate(e[1].params,e[1].ms,mina.linear,function(){t()})}),l.attr({href:a}),(new Date).getTime()}}function s(){e.innerHTML="",jsPsych.pluginAPI.cancelKeyboardResponse(key_listener);var t={stimuli:JSON.stringify(i.stimuli),responses:JSON.stringify(a)};jsPsych.finishTrial(t)}var a=[],n=[[{params:{x:i.canvas_size[0]-i.image_size[0]},ms:i.cycle_duration/2},{params:{x:i.canvas_size[0]/2-i.image_size[0]/2},ms:i.cycle_duration/2}],[{params:{x:0},ms:i.cycle_duration/2},{params:{x:i.canvas_size[0]/2-i.image_size[0]/2},ms:i.cycle_duration/2}]],r=0,c="right"==i.initial_direction?0:1;e.innerHTML="<svg id='jspsych-vsl-animate-occlusion-canvas' width="+i.canvas_size[0]+" height="+i.canvas_size[1]+"></svg>";var o=Snap("#jspsych-vsl-animate-occlusion-canvas"),l=o.image(i.stimuli[r],i.canvas_size[0]/2-i.image_size[0]/2,i.canvas_size[1]/2-i.image_size[1]/2,i.image_size[0],i.image_size[1]).attr({id:"jspsych-vsl-animate-occlusion-moving-image"});e.querySelector("#jspsych-vsl-animate-occlusion-moving-image").removeAttribute("preserveAspectRatio"),i.occlude_center&&o.rect(i.canvas_size[0]/2-i.image_size[0]/2,0,i.image_size[0],i.canvas_size[1]).attr({fill:"#000"});var m=function(e){a.push({key:e.key,stimulus:r-1,rt:e.rt})};key_listener=jsPsych.pluginAPI.getKeyboardResponse({callback_function:m,valid_responses:i.choices,rt_method:"date",persist:!0,allow_held_key:!1}),i.pre_movement_duration>0?jsPsych.pluginAPI.setTimeout(function(){t()},i.pre_movement_duration):t()},e}();