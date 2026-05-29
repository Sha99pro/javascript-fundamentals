/**** DEBUGGING LOGIC ERRORS ****/

/** EXAMPLE 1 - THE FLIPPED SIGN **/

let shieldPower = 10;
let dangerZoneThreshold = 50;

// DEMO: Run the code to see the result, then fix the code and re-run to verify.
let isShieldSafe = shieldPower < dangerZoneThreshold;

console.log(`Shield Power: ${shieldPower}`);
console.log(`Is Shield Safe? ${isShieldSafe}`);


isShieldSafe = shieldPower >= dangerZoneThreshold;
console.log(`Shield Power: ${shieldPower}`);
console.log(`Shield status: ${isShieldSafe}`);
/** EXAMPLE 2 - THE WRONG VARIABLE **/

let pilotExperience = 10; // years
let requiredExperience = 5;
let hasHelmet = false;

let isPilotCleared = false; // for spacewalk

// DEMO: Run the code to see the result, then fix the code and re-run to verify.
if (pilotExperience >= requiredExperience && hasHelmet){
	isPilotCleared = true;
    console.log("Pilot is cleared for spacewalk");
}else{
    isPilotCleared = false;
    console.log("Warning: Helmet is missing. Stay in the spaceship.");
}


// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
