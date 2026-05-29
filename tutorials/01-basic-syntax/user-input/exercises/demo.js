// DEMO: Import the readline-sync library

/**** CAPTURING USER INPUT FROM THE CONSOLE ****/

// Let's create a short interactive form for astronauts to check in with NASA.
const input = require("readline-sync");
// DEMO: Create a hard-coded header.
console.log("------------ WELCOME TO THE MISSION ----------------");
// DEMO: Ask for the pilot name, then greet them.
const pilotName = input.question("Please enter the pilot name");
console.log(`Welcome aboard, Captain ${pilotName}!!`);

// DEMO: Ask for the number of orbits (validate as a whole number).
const orbitCount = input.questionInt("How many orbits are completed so far?");

// DEMO: Ask for the current velocity (validate as a decimal number or 'float').
const currentVelocity = input.questionFloat("Please enter the ship's current velocity: ");

// DEMO: Print a final, multi-line summary using the data captured.
console.log(`---Full Details---
Pilot Name: ${pilotName}
Orbit Count: ${orbitCount}
Current Velocity : ${currentVelocity}
Status : Preaparing for launch sequence `);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
