//Tracker-API Bundle

/*


Functions:
        Here I want to create a program that can keep track of various keywords/flagged terms
    and actively compile new and existing data to provide on overall report on the user's
    "Codex-Entry." I assume the core of my program will be centered around basic functions
    that already exist within both Microsoft Word and Google Docs--that being the ability
    to search a text for each instance of a keyed word and jump to that word's position in
    the text.If I were to input some sample text into word, I'd be able to 'ctrl-f' to find and
    count ever time the author used the word 'Donkus,' for instance.
        I want to piggyback off that function and add several features to it.

        These might include:
                
                +Saving the search result data into a codex entry that the trackerAPI
                continually adds to/updates in the codex's database entry of the flagged
                term.

                -More specific data on the use of the term. Let's use a random example character
                to be clearer---Dr. Red P. Herring, for instance. The user would either: 

                    1. Setup a codex entry for his/her character in advance on the codex site,
                        (this would then set the character's name [Red P. Herring] as a keyword to keep track
                        off when the user links their text doc with the codex database site---
                        probably using a codex-plugin app for either word or G.docs).    
                        
                                            
            **Note (IMPORTANT!!!)**
                            The program would need to be able to distinguish between 'Red' the character name, 'red' the color,
                        and understand that 'Red', 'Reddington', 'Mr. Herring', 'Mr. Red/Reddington (P.) Herring', and any
                        other forms/variations of the character's name all refer to the character [Red Herring] and should be
                        compiled with that character's codex entry.
                            In addition, any nicknames, honorifics, specific/unique titles (such as 'His Majesting R.P. Herring')
                        or attributions that could serve in place of the character's name ('the Butcher of Balderkin',
                        'the Mad Manservant', 'the Renegade Scholar', etc.) should also be recognized [IDEALLY].  




        __Or__

                    2. Highlight the character's name [Red Herring] in the text doc (with the codex plugin on and
                        signed into) and select settings/fill in various needed information (i.e. is this a character,
                            a place, an event, etc.---do you want the codexApp to add this 'x' into your codex library
                            as a new entry?).

                The data compiled from each instance of the character's name would then give you an idea of the character's
                typical behavior, how other characters talk/think about that character, and more...
                    In my mind, this would happen by programming the trackerAPI to recognize that Red Herring is being mentioned
                or is involved in the scene and look at what's being said about him, what he's expressing,
                or what actions he's taking. This would all occur within the context of the sentence him which Herring appears.
                
                For instance, 
                        "Red Herring appeared like a ghost from hell from the night and howled at the girl's attackers as he 
                        charged the unwitting men."

                Here Red is 'appearing like a ghost,' 'howling,' and 'charging.' The program would first recognize that a flagged-term
                has been written--add the instance to the tally and store its location in the database--and then look at the various
                adjectives used to describe Red Herring as well as adverbs describing his actions and keep track of that too. In the context
                of character dialogue, I would want the program to be able to keep a list of the character's "favorite words" or phrases.
                    In the end, the user should be able to see data--or at least an analysis of the raw data--in the character's codex entry
                and be able to glean useful inferences from it. For example, if Red Herring is described most often as been 'quick and
                nimble' despite the fact that the user/author had given him a crippling disability, such as a dead leg, the user can
                realize--"oops, I forgot about the leg when I wrote that" or "Okay, so I need to revise some sections to better reflect
                my new imagining of him." Or maybe the author simply forgot how much of a bastard everyone thought he was and can
                now see that there's no way other characters would behave in this or that way towards him.
                    
        ***Essentially, I want to make it easier for my user to keep track of how they are using their characters (or whatever else),
            quickly recall back to certain sections for changes or fixes or just to get back into the mindset of the character
            if its been awhile since the character has been mentioned (or since the author has written).
    
_____________




Design Theory:
    -In theory, I'm going to get a bunch of free api from various sources
    and then bundle them all into my own cluster of code which will be 
    able to perform all the app functions that I've listed above. This
    process is similar to how one would combine several benign man-children
    to form one colossal pile of human-garbage. Such practices have been 
    proven effective in the past (see Jeffery Foreman's article on how
    fox news anchors are born).

In all seriousness...

    I've been looking at various text analysis/tracker api but the ones that really come to mind
    would be the ones that are their own...services essentially. Meaning they are very well 
    developed, corporate products from well know companies that charge for use. They also likely
    are very touchy about other people creating with their property...  



*/












//-----------------------
//-----------------------
//-----------------------



/* // Run the wordAPI---if dedicating to microsoft text editor (hopefully will get access to google docs)
(function () {
    "use strict";

    // The initialize event handler must be run on each page to initialize Office JS.
    // You can add optional custom initialization code that will run after OfficeJS
    // has initialized.
    Office.initialize = function (reason) {
        // The reason object tells how the add-in was initialized. The values can be:
        // inserted - the add-in was inserted to an open document.
        // documentOpened - the add-in was already inserted in to the document and the document was opened.

        // Checks for the DOM to load using the jQuery ready function.
        $(document).ready(function () {
            // Set your optional initialization code.
            // You can also load saved settings from the Office object.
        });
    };

    // Run a batch operation against the Word JavaScript API object model.
    // Use the context argument to get access to the Word document.
    Word.run(function (context) {

        // Create a proxy object for the document.
        var thisDocument = context.document;
        // ...
    })
})(); */
//--------------------------
