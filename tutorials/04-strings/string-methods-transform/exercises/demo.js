/**** COMMON STRING METHODS: TRANSFORMING STRINGS ****/

let rawData = "   lv-426-xenomorph   ";

/** EXAMPLE 1 - CHANGING CASE **/

// DEMO: Convert to a loud, emergency shout

<<<<<<< HEAD
let shoutData = rawData.toUpperCase();
console.log(shoutData);

/** EXAMPLE 2 - TRIMMING WHITESPACE **/ 
=======
/** EXAMPLE 2 - TRIMMING WHITESPACE **/
>>>>>>> upstream/main

// DEMO: Remove the leading and trailing spaces
let cleanedData = rawData.trim();
console.log(cleanedData);

/** EXAMPLE 3 - REPLACING TEXT **/

// DEMO: Swap the sector code for a common name
let updatedData = cleanedData.replace("lv-426", "Alien Sector");
console.log(updatedData);

/** EXAMPLE 4 - IMMUTABILITY CHECK **/

let planet = "Mars";
planet.toUpperCase();

// DEMO: Log planet to the console to see its value
planet = planet.toUpperCase();
console.log(planet);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
