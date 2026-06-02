/**** HIGHER-ORDER FUNCTIONS ****/

/** EXAMPLE 1 - THE HOF SYSTEM MANAGER **/

// DEMO: Define a HOF that accepts a target name and a function that can describe
// specifically how that target is engaged.

function engageTacticalComputer(targetName, engageTarget) {
  console.log(engageTarget(targetName));
}


// DEMO: Pass an in-place contractor to SCAN the target

engageTacticalComputer("Unidentified Frigate", (name) => "Scanning " + name);

// DEMO: Pass a completely different contractor to WEAPON LOCK the target

engageTacticalComputer("Unknown target", (name) => "Locking" + name);


/** EXAMPLE 2 - RETURNING A FUNCTION FROM A HOF **/

// DEMO: Define an HOF that can manufacture and return brand-new specialized functions
function manufacturer(operation){
    return (a , b) =>{
            return operation(a , b);
    }
}

// DEMO: Use the HOF to manufacture two distinct calculation engines

const addEngine = manufacturer((a , b) => a + b);
const multiplyEngine = manufacturer((a, b) => a * b);

// DEMO: Call each manufactored function and log a report:

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
