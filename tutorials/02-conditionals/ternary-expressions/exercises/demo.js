/**** TERNARY EXPRESSIONS ****/

/** EXAMPLE 1 - USING A BOOLEAN VARIABLE **/

let isDockingComplete = true;

// DEMO: Use a regular if/else statement to assign a status string
// to a new variable, gateStatus.
let gateStatus;
if(isDockingComplete){
    console.log("GATE STATUS: OPEN");
}else{
    console.log("GATE STATUS : CLOSED");
}

// DEMO: Now, rewrite it using a one-line ternary expression and assign
// it to a variable called airlockGateStatus
let airlockGateStatus = isDockingComplete ? "OPEN" :"CLOSED";
console.log(airlockGateStatus);

/** EXAMPLE 2 - USING A BOOLEAN EXPRESSION **/

let lightYears = 5;

// DEMO: If distance is over 10, assign "Warp", otherwise "Impulse" to a new
// variable, driveMode

let driveMode = lightYears > 10 ? "Warp" : "Impulse";
console.log(driveMode);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
