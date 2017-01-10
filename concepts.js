/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...
function joinList(conceptsArry) {
  // body...
  var len = conceptsArry.length,
      str = "";

  if(len === 0) { return "";}

  for(var i = 0; i < len - 1; i++) {
    str += conceptsArry[i] + ', ';
  }

  return str + conceptsArry[len - 1];
}

console.log("Today I learned about " + concepts + ".");

