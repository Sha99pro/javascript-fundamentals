/**** BASIC CONDITIONAL STATEMENTS ****/

/** EXAMPLE 1 - BASIC IF **/

let fuelPercent = 15;

// DEMO: Print a warning message if the fuel percentage is less than 20.
if(fuelPercent < 20){
    console.log("Warning! fuel level is low");
}

/** EXAMPLE 2 - IF/ELSE PATHS **/

let hatchStatus = "Locked";

// DEMO: If the hatch is open, print a caution message.
// Otherwise, print a confirmation that it is secured.
if(hatchStatus === "Open"){
    console.log("CAUTION: Hatch is open, be careful.")
}else{
    console.log("Hatch is closed. Ready for Vaccum");
}


/** EXAMPLE 3 - UPDATING VARIABLES IN BLOCKS **/

let engineStatus = "Inactive";
let isIgnitionTriggered = true;

// DEMO: If the ignition has been triggered, set the engine status
// to "Active". Otherwise make sure the status is set to "Inactive".
// Log the engine status to verify the correct value was stored.

if(isIgnitionTriggered){
    console.log("ENGINE STATUS: ACTIVE");
}else{
    console.log("ENGINE STATUS: INACTIVE");
}

/** EXAMPLE 4 - LOOKING FOR SPECIFIC MATCHES **/

let lightStatus = "Blinking Blue";

// DEMO: Print specific messages if the light is green (go) or red (error),
// then provide a third message for any value other than green or red.
if(lightStatus === 'red'){
    console.log("System error.")
}else if(lightStatus === 'green'){
    console.log('You can go ahead')
}else{
    console.log("Detected another status light.")
}

/** EXAMPLE 5 - MULTIPLE PATHS **/

let fuelLevel = 45;

// DEMO: Print a fuel status message according to the following:
// If greater than 80, it is full.
// If greater than 20 but less than or equal to 80, it is nominal.
// If it is 20 or lower, it is critical.

if(fuelLevel > 80){
    console.log("Tank full")
}else if(fuelLevel >20 && fuelLevel <= 80){
    console.log("It is nominal");
}else{
    console.log("It is critical");
}
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
