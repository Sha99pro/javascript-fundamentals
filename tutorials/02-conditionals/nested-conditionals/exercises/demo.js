/**** NESTED CONDITIONALS ****/

/** EXAMPLE 1 - THE GATEKEEPER **/

let isShipDocked = true;
let airPressurePercent = 100;

// DEMO: Check air pressure only if the ship is actually docked.
// Print a statement for each possible outcome.
if(isShipDocked){
    console.log("Ship is Docked. We can check air pressure.");
    if(airPressurePercent === 100){
        console.log("Safe to open airlock.")
    }else{
        console.log("Not safe to open airlock. Air pressure mismatched.");
        }
}   else{
    console.log("Ship is not docked. We cannot check air pressure. ");
}
 

/** EXAMPLE 2 - NESTED LOGIC WITH FALLBACKS **/

let fuelLevel = 15;
let isEmergencyOverrideActive = false;

// DEMO: If fuel is low, we only panic if there's no emergency override.
// Print a statement for each possible outcome.

if(fuelLevel < 20){
    if(isEmergencyOverrideActive){
        console.log("SAFE: Emergency override is active.");
    }else{
        console.log("CRITICAL: Low fuel. No override. Need to refuel immediately.");
    }
}else{
    console.log("Fuel levels are normal")
}
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
