/**** COMMON STRING METHODS: TRANSFORMING STRINGS: PRACTICE ****/

/*
    Clean up and reformat these satellite transmissions 
    using transformation methods.
*/

/** EXERCISE 1: INPUT STANDARDIZATION **/

let userInput = "ready";

/*
    TODO: The computer expects "READY". 
    Convert 'userInput' to all uppercase so the check passes,
    and store it a new variable. Log it to the console.
*/
let showUpper = userInput.toUpperCase();
console.log(showUpper);

/** EXERCISE 2: SPACE POLICE **/

let pilotNickname = "   Star-Lord   ";

/*
    TODO: Remove the accidental leading and trailing spaces 
    from 'pilotNickname', and store it a new variable. 
    Log it to the console.
*/
let cleanedName = pilotNickname.trim();
console.log(cleanedName);

/** EXERCISE 3: SYSTEM UPGRADE **/

let softwareVersion = "Version-Old-Station";

/*
    TODO; Replace the word "Old" with "New" in the 
    'softwareVersion' string, and store it a new variable. 
    Log it to the console.
*/
let newVersionWord = softwareVersion.replace("Old", "New");
console.log(newVersionWord);

/** EXERCISE 4: LOWERCASE LOGGING **/

let emailAddress = "COMMANDER.SHEPARD@CITADEL.GOV";

/*
    TODO: Convert the 'emailAddress' to all lowercase 
    to prepare it for a database, and store it a new variable. 
    Log it to the console.
*/
let showLowerCase = emailAddress.toLowerCase();
console.log(showLowerCase);

// Great job!
