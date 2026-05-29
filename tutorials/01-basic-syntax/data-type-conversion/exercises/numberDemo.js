/**** EXPLICITLY CONVERTING DATA TO NUMBERS ****/

/** EXAMPLE 1 - Numbers stored as strings **/
let crewCount = "7"; // integer
let oxygenStatus = "0.85"; // float



// DEMO: Use Number() to convert crewCount and oxygenStatus to numbers,
// then print the new values and their types to the console.
let totalAstronautCount = Number(crewCount);
console.log(totalAstronautCount);
console.log(typeof totalAstronautCount);

let statusNumberOfOxygen = Number(oxygenStatus);
console.log(statusNumberOfOxygen);
console.log(typeof statusNumberOfOxygen);


/** EXAMPLE 2 - Strings starting with numbers but having additional characters **/
let missionLength = "17 days"; // integer
let velocity = "45000.75 km/h"; // float

let totalDaysOfMission = parseInt(missionLength);
console.log(totalDaysOfMission);
console.log(typeof totalDaysOfMission);

// DEMO: Use parseInt() to extract the integer from missionLength,
// then print the new value and its type to the console.

// DEMO: Use parseFloat() to extract the number from velocity
// and retain the precision of its decimal value, then print
// both the new value and its type to the console.
let travelSpeed = parseFloat(velocity);
console.log(travelSpeed);
console.log(typeof travelSpeed);


/** EXAMPLE 3 - A string with no numeric value */
let pilotName = "Sally Ride";

// DEMO: Use Number() to convert the string pilotName, then
// print the new value and its type to the console. What happens?
let pilotNumber = Number(pilotName);
console.log(pilotNumber);
console.log(typeof pilotNumber);

/** EXAMPLE 4 - An empty string **/
let alertMessageCode = "";

// DEMO: Use Number() to convert the empty string alertMessage, then
// print the new value and its type to the console. What happens?
let alertCodeValue = Number(alertMessageCode);
console.log(alertCodeValue);
console.log(typeof alertCodeValue);

/** EXAMPLE 5 - A boolean value (true or false) **/
let isSystemOnline = true;

// DEMO: Use Number() to convert isSystemOnline, then print both it
// and its type to the console. What happens?
let systemCount = Number(isSystemOnline);
console.log(systemCount);
console.log(typeof systemCount);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
