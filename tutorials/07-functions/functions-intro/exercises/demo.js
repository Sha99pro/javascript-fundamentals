/**** INTRODUCTION TO FUNCTIONS ****/

/** EXAMPLE 1 - DECLARING & CALLING **/

// DEMO: Declare a function that prints a report when solar panels are deployed

function deployReport() {
    console.log("Solar panels have been successfully deployed.");
}



// DEMO: Call the function twice in a row to see it being used and reused
deployReport();
deployReport();

/** EXAMPLE 2 - CODE ORGANIZATION **/

// DEMO: Declare a function that prints an emergency message

function soundSiren() {
    console.log("Emergency! Hull breach detected!");
}

let hullBreach = true;

if (hullBreach) {
<<<<<<< HEAD
    soundSiren();
=======
	// DEMO: Call the function to sound the siren
>>>>>>> upstream/main
}
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
