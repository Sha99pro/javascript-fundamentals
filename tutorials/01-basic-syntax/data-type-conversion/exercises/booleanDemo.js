/**** EXPLICITLY CONVERTING DATA TO BOOLEANS ****/

/** EXAMPLE 1 - FALSY VALUES */

let humanVisitorsToMars = 0;
let screamInSpace = "";
let alienLifeDetected = null;
let darkMatter = undefined;
let imaginaryNumber = NaN;

//Explicitly converted
let hasHumanVisitedToMars = Boolean(0);
console.log(hasHumanVisitedToMars);

let canScreamInSpace = Boolean("");
console.log(canScreamInSpace);

let isAlienLifeDetected = Boolean(null);
console.log(isAlienLifeDetected);

let hasDarkMatter = Boolean(undefined);
console.log(hasDarkMatter);

let hasImaginaryNumber = Boolean(NaN);
console.log(hasImaginaryNumber);


// DEMO: Convert each value above to Boolean and log its new value.

/** EXAMPLE 2 - TRUTHY VALUES */

let humanVisitorsToMoon = 28;
let firstHumanToWalkOnMoon = "Neil Armstrong";
let buzzLightyearDestination = Infinity;

//Explicitly converted
let hasHumanVisitedToMoon = Boolean(28);
console.log(hasHumanVisitedToMoon);

let hasHumanWalkedOnMoon = Boolean("Neil Armstrong");
console.log(hasHumanWalkedOnMoon);

let hasBuzzLightyearDestination = Boolean(Infinity);
console.log(hasBuzzLightyearDestination);

// DEMO: Convert each value above to Boolean and log its new value.

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
