var jsPsychCallFunction=function(n){"use strict";const t={name:"call-function",parameters:{func:{type:n.ParameterType.FUNCTION,pretty_name:"Function","default":undefined},async:{type:n.ParameterType.BOOL,pretty_name:"Asynchronous","default":!1}}};class e{constructor(n){this.jsPsych=n}trial(n,t){let e;const s=()=>{const n={value:e};this.jsPsych.finishTrial(n)};if(t.async){const n=n=>{e=n,s()};t.func(n)}else e=t.func(),s()}}return e.info=t,e}(jsPsychModule);