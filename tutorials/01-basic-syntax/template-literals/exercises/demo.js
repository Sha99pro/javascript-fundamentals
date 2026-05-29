/**** STRING INTERPOLATION WITH TEMPLATE LITERALS ****/

/** EXAMPLE 1 - Single Lines **/

let captain = "Malcolm Reynolds";
let ship = "Serenity";
let fuelLevel = 85;
let fuelRequired = 80;

// Here's what we want to produce in the console using variables where the blanks are.
// Captain __________ has a ship called ___________.

// DEMO: Use concatenation to print the sentence the way you already know.
let messageInKnownWay = "Captain " + captain + " has a ship called " + ship + ".";
console.log(messageInKnownWay);

// DEMO: Use a template literal to print the sentence instead.
let messageIntemplateLit = `Captain ${captain} has a ship called ${ship}`;
console.log(messageInKnownWay);


/** EXAMPLE 2 - Evaluating expressions within placeholders **/

// DEMO: Create a template literal stating the amount of fuel that will be
// left after the next trip, with your calculation inside a single placeholder.
// Print the result to the console.

let fuelUpdate = `The fuel level after the next trip will be ${fuelLevel - fuelRequired}%.`;
console.log(fuelUpdate);

/** EXAMPLE 3 - Multi-line formatting **/

// DEMO: Using a single template literal, create a multi-line mission brief
// that lists the values from the variables above, then print it to the console.
let missionDetailsInBrief = (`Mission Details
Captain : ${captain} 
Ship : ${ship}
Fuel Level : ${fuelLevel}%
`);
console.log(missionDetailsInBrief);


           
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
