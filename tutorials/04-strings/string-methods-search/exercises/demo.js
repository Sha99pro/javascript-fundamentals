/**** COMMON STRING METHODS: SEARCHING STRINGS ****/

let missionUpdate = "Targeting Mars: Arrival in 40 days.";

/** EXAMPLE 1 - INDEX OF **/

// DEMO: Find where "Mars" starts and log the result.
let indexOfMars = missionUpdate.indexOf("Mars");
console.log(indexOfMars);


// DEMO: Find where "Moon" starts and log the result.
// (what happens when it doesn't exist?)
let indexOfMoon = missionUpdate.indexOf("Moon");
console.log(indexOfMoon);

/** EXAMPLE 2 - INCLUDES **/

// DEMO: Determine if the substring "URGENT" exists or not
let subIncludesUrgent = missionUpdate.includes("Urgent");
console.log(subIncludesUrgent);


/** EXAMPLE 3 - STARTSWITH / ENDSWITH **/

// DEMO: Determine if the string starts with "Targeting"
let hasTargeting = missionUpdate.startsWith("Targeting");
console.log(hasTargeting);


// DEMO: Determine if the string ends with "."
let hasEndCheck = missionUpdate.endsWith(".");
console.log(hasEndCheck);


// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
