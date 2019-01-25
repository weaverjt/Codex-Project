//Tracker-JS File
/*Code that allows the app to search a text-doc, 
tally, sort, and locate words. As well as code for
call to the database to compare most recent save data
with prior and update codex entry in accordance with the
author's changes. 
*/
//________________________________________________________//
//Word Counter/Text Analyzer---

//Empty object variable
var concordance = {};

/*If I wanted to sort concordance, I'd use another array and run 
key.sort(function (a, b) {
b - a
});
*/
var keys = [];
//A list of the user's keyed terms that the codex ought to track---

//Basic Word Counter
//_____________________
function wordCount() {

    var example = document.getElementById("target").textContent;
    //Splits into array
    tokens = example.split(/\W+/);
    //Cycles through array and counts words
    for (var i = 0; i < tokens.length; i++) {
      var word = tokens[i];
      // It's a new word!
      if (concordance[word] === undefined) {
        concordance[word] = 1;
        // We've seen this word before!
      } else {
        concordance[word]++;
      }
    }
    return concordance;
  }
wordCount();
console.log(concordance);
//________________________



/* 
Need to add in class to the data base to compare
raw data with previous saves and update accordingly.

Need to add in flagged term function---exported from flagged.js

Need to add...etc.

*/