/**** DATA TYPE CONVERSION: PRACTICE ****/

/*
    Get some practice with both explicit and implicit conversion.
*/

/** EXPLICIT CONVERSION **/

// STRINGS

// 1. TODO: Convert these values to numbers using String() and .toString() (try one of each)
// Store the converted values in new variables; print each variable and its type.
let engineTemp = 240;
let isShieldActive = true;


let tempOfEngine = String(engineTemp);
console.log(tempOfEngine);
console.log(typeof tempOfEngine);

let shieldStatus = isShieldActive.toString();
console.log(shieldStatus);
console.log(typeof shieldStatus);

// NUMBERS

// 2. TODO: Convert these values to numbers using the appropriate conversion function/method.
// Store the converted values in new variables; print each variable and its type.
let inputSpeed = "28000";
let inputThrust = "9.81ms";
let inputRotation = "15.5 degrees";

let shipInputSpeed = Number(inputSpeed);
console.log(shipInputSpeed);
console.log(typeof shipInputSpeed);

let engineThrust = parseInt(inputThrust);
console.log(engineThrust);
console.log(typeof engineThrust);



// BOOLEANS

// 3. TODO: Convert these values to booleans and store the values in new variables,
// grouping them by "truthy" and "falsy". Print each variable and its type.
let shipName = "Columbia";
let cargoWeight = 0;
let missionStatus = "";
let crewCount = 5;
let repairPlan = null;

let isShipReady = Boolean(shipName);
console.log(isShipReady, typeof isShipReady);

let isCargoReady = Boolean(cargoWeight);
console.log(isCargoReady, typeof isCargoReady);

let hasMissionStatus = Boolean(missionStatus);
console.log(hasMissionStatus, typeof hasMissionStatus);

let hasCrewReady = Boolean(crewCount);
console.log(hasCrewReady, typeof hasCrewReady);

let hasRepairPlan = Boolean(repairPlan);
console.log(hasRepairPlan, typeof hasRepairPlan);



/** IMPLICIT CONVERSION (TYPE COERCION) **/

let numberOfAstronauts = 5;
let mealsPerAstronaut = 12;
let beveragesPerAstronaut = 24;
let shuttleName = "Discovery";

// 4. TODO: Use what you know about implicit conversion to print the following sentences.
// Use the variables above, and write only one line of code per sentence.

// Print "A total of 60 meals have been loaded onto the shuttle Discovery."
console.log("A total of " + numberOfAstronauts * mealsPerAstronaut + " meals have been loaded onto the shuttle Discovery.");

// Print "A total of 36 meals and beverages will be needed for each astronaut."
console.log("A total of " + (mealsPerAstronaut + beveragesPerAstronaut) + " meals and beverages will be needed for each astronaut.");

// TODO: Before you go... don't forget to make a git commit!
