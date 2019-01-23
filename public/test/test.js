/*Word Counter/Text Analyzer
________________________________
Basic Goal:
1. write script to access example text and treat it as a String.

2. Split text block into substrings:
-ensure that it recognizes apostraphies
-make it discount punctuation '(' ',' '.' '!' "etc."

3. once script can treat ex. text as a string and split it into an array of words 
(minus punctuation and spaces) build a second array function to run through
the first that records each word and the number of times it occurs through the 
text.
*/

//Basic Word Counter
//_____________________

//Empty object variable
var concordance = {};

var keys = {};
var flagged = [
  "text",
  "punctuation"
]

function textArray() {

  function getText() {
    var example = document.getElementById("target").textContent;
    return example;
  }
  var txt = getText();

  function textSort() {
    //Splits into array
    tokens = txt.split(/\W+/);
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
textSort();
console.log(concordance);
}
textArray();

