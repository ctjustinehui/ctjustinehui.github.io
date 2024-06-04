const root="../../";require(root+"jspsych.js"),describe("unique",function(){test("generates unique array when there are duplicates",function(){var t=[1,1,2,2,3,3],e=jsPsych.utils.unique(t);expect(e).toEqual([1,2,3]),expect(e).not.toEqual(t)}),test("generates same array when there are no duplicates",function(){var t=[1,2,3],e=jsPsych.utils.unique(t);expect(e).toEqual(t)})}),describe("flatten",function(){test("generates flat array from flat input",function(){var t=[1,1,2,2,3,3],e=jsPsych.utils.flatten(t);expect(e).toEqual(t)}),test("generates flat array from nested input",function(){var t=[1,[1,2,2],[3],3],e=jsPsych.utils.flatten(t);expect(e).toEqual([1,1,2,2,3,3])})}),describe("deepCopy",function(){test("works for objects",function(){var t={a:1,b:{c:2,d:3}};jsPsych.utils.deepCopy(t).b.c=4,expect(t.b.c).toBe(2)}),test("works for objects with arrays",function(){var t={a:1,b:[2,3]},e=jsPsych.utils.deepCopy(t);e.b[0]=4,expect(JSON.stringify(e.b)).toBe(JSON.stringify([4,3])),expect(t.b[0]).toBe(2)}),test("works for objects with functions",function(){var t=0,e={a:1,b:function(){t=2}},s=jsPsych.utils.deepCopy(e);s.b=function(){t=1},e.b(),expect(t).toBe(2),s.b(),expect(t).toBe(1)})});