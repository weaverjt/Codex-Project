//Word Counter/Text Analyzer


//Empty object variable
var concordance = {};

/*If I wanted to sort concordance, I'd use another array and run 
key.sort(function (a, b) {
b - a
});
*/
var keys = [];

//A list of the user's keyed terms that the codex ought to track---
var flagged = []

//A variable that signifies a keyed term
var flag;

//A function that grabs the list of keyed terms



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


function wordSearch() {


}
