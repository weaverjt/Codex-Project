//Script for the process of setting or removing an active flag
//Adds/removes flag terms from the flag list.

//WordCount() and flagSearch() should run when the document auto-saves
//onSave(ALL THE CODE)...? **NEED ACCESS TO MICROSOFT WORD OR GOOGLE DOC API**

/* 
Plug-in flagList[P] 
//This would be considered local files stored on the device for use in off-line mode.

Codex flagList[C]
//This would be on the site--online mode so it would just instantly sync with database-
but maybe also a quasi-offline set for use in a mobile app??

//Master flagList[M] 
//The list stored on database to which both the app & plug-in would sync.
---
so
---
1. Need code for local storage for the plugin so you won't lose progress if
your internet gets interrupted. **Probably need to look at how [M]Word and [G]Docs
handles its save data (locally and with cloud backups on).

2. Can probably just copy above solution over to the "app version" with 
a few minor tweaks (if I get that far).
    2.1. Note-- 
        -The (mobile)app version would consist mainly of the codex library
        where you would be able to read through your codex entries, organize them,
        and flag terms (most likely entry titles) for the full version to track
        when they get to a computer...
        -Should be able to add codex entries (i.e. new characters/concepts)
        in the (mobile)app so you can actively add to and edit your lore.
        -Will probably be able to start new codex projects as well 

3. Need make sure that the data is being saved on the database. [priority]
*/

/* 

//probably need it to compare its own (local) list with
//the server's flag list

//flag button: will be connected to the plug-in and will 
//give the user option to toggle on and off flags...
--do I want a "Flag List" that just keeps track of any
word that has been flagged in the past? so like..

Flags:
---
Nate: On/Off/Delete
---
Nessah:On/Off/Delete
---
etc.
^and that all is a UI in a side bar?

or just a list of flags which the tracker will 
sort out and tally...and removing a flag just deletes 
it all together??

Which is more useful and what function exactly do I want to give
to my users??

**eventually, I want the flag word to have snippet when you hover over
it in the doc which you can expand into a window(or maybe just a pop-up on the side bar?) 
that gives you the codex entry... 

***Side Note: if the text analysis thing gets working eventually,
maybe I should get a function that tracks consistency (in the character description)
as well as breakpoints that mark significant changes to the character 
(i.e. he lost his leg, got married, or died). 



flag property

add to flag_list

remove from flag_list

*/