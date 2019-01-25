//Tracker-JS File
/*Code that allows the app to search a text-doc, 
tally, sort, and locate words. As well as code for
call to the database to compare most recent save data
with prior and update codex entry in accordance with the
author's changes. 
*/
//________________________________________________________//
//import(flagged())


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

//________________________

// FLAG_LIST SEARCH/UPDATE
//______________________________________

//list of flagged terms/keywords stored in the database
var flagList = [];

//The data returned from flagSearch function---(updated wordTally, locations, etc.)
// (Unsure if I should leave as simple declared variable or empty array/object??)
var flagPackage = {}
var update;

//A function that gets  flagList from database (list of keyed(flagged) terms
function getFlagList () {
    //query codex_db table flag_list
    //return data from flagList---store in flagList variable
}

//Function that compares concordance list/data (returned from wordCount function)
//with the flagList and returns matches split from concordance.
function flagSearch () {
    
    //compare flagList with concordance;
    concordance.sort(function(a, b) {
    
    //puts everything to lowercase so function recognizes broader instances.
    var concL = concordance[i].toLowerCase();
    var flagL = flagList[i].toLowerCase();
    
    //iterate through lowercase concordance & flaglist and pushes matches to flagPackage
    for (var i = 0; i < concordance.length; i++) {
    
        if (concordance[i] === flagList[i]) {
        //push the word to flagPackage
        //flagPackage = (matches between concordance & flagList)
    }
        return flagPackage;
    }

//-------

    update = flagPackage;  
    return update;
    });

    /*
    //Update database's flag_list (table) data.
    INSERT update INTO FLAG_LIST
    //add code process to handle the new and old data...right?

    */
}





