/**** BASIC BOOLEAN EXPRESSIONS ****/

/** EXAMPLE 1 - STRICT EQUALITY **/

let hatchCode = "1234-Alpha";
let inputCode = "1234-Alpha";

// DEMO Check to see if the input code matches the hatch code.
let isCorrectCode = hatchCode === inputCode;
console.log(isCorrectCode);

/** EXAMPLE 2 - LOOSE EQUALITY **/

let shuttleVelocityMPH = 9500;
let satelliteVelocityKPH = "15000";
const KILOMETERS_PER_MILE = 1.60934;

// DEMO: Check whether the shuttle has matched the satellite velocity yet
let hasShuttleVelocityMatchedSatellite = shuttleVelocityMPH * KILOMETERS_PER_MILE  === satelliteVelocityKPH;
console.log(hasShuttleVelocityMatchedSatellite);

/** EXAMPLE 3 - INEQUALITY **/

let currentSector = "Orion";
let destination = "Earth";
// DEMO: Check if the current sector is NOT our destination.
let isNotOurDestination = currentSector !== destination;
console.log(isNotOurDestination);

/** EXAMPLE 4 - GREATER THAN & LESS THAN **/

let currentOxygen = 15;
let requiredOxygen = 20;

// DEMO: Check if we have enough oxygen to survive.
let canWeSurvive = currentOxygen > requiredOxygen;
console.log(canWeSurvive);

// DEMO: Check if the oxygen is so low that it's critical
let isOxygenCritical = currentOxygen <= 10;
console.log(isOxygenCritical);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
