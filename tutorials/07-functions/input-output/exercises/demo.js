/**** FUNCTION INPUT & OUTPUT ****/

/** EXAMPLE 1 - PARAMETERS & ARGUMENTS **/

// DEMO: Define a function to greet a crew member'crewName' is the parameter (the variable placeholder)
function greetCrewMember(crewName){
    console.log(`Hello, ${crewName}`);
}

// DEMO: Invoke the function twice with two different names.
greetCrewMember("Alice");
greetCrewMember("Ashley");

/** EXAMPLE 2 - MULTIPLE INPUTS **/

// DEMO: Define a function that accepts distance and time. It should calculate velocity
// and also print updates to the console.
function calculateVelocity(distance , time){
    let speed = distance/time;
    console.log(`Velocity is: ${speed}m/s`);
}

// DEMO: Call the function, passing in 100 meters and 10 seconds as arguments
calculateVelocity(100 , 10);

/** EXAMPLE 3 - RETURN VALUES **/

// DEMO: Define a function that accepts amounts of hydrogen and oxygen and returns the total
// What happens if you code a message to print after the line with the return statement?
function computeWaterMix(hydrogenqty , oxygenqty){
        let totalMass = hydrogenqty + oxygenqty;
        return totalMass;
} 

// DEMO: Call the function and pass in 50t of hydrogen and 25t of oxygen
// Store the result in a new variable and then print a sentence using it
let reactionOutput = computeWaterMix(50 , 25);
console.log(`System Update: ${reactionOutput} tons of H2O precursor formed.`);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
