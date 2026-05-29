/**** VARIABLE SCOPE ****/

/** EXAMPLE 1 - GLOBAL SCOPE **/

let shipName = "Rocinante";

function displayShipName() {
	console.log(`Transmitting identity: ${shipName}`);
}

// DEMO: Call the function above to see if the shipName variable is in scope
displayShipName(); // yes in scope

/** EXAMPLE 2 - LOCAL SCOPE (Parameters & Functions) **/

// 'incomingWaterTons' is a parameter. It acts EXACTLY like a local variable!
function processDriveCoolant(incomingWaterTons) {
	let conversionFactor = 0.85; // Another local variable

	// We can use both local variables freely inside here
	let activeCoolantTons = incomingWaterTons * conversionFactor;
	console.log(`Coolant active in core: ${activeCoolantTons} t`);
}

// DEMO: Call the function above
//processDriveCoolant(10000);

// DEMO: Log the parameter incomingWaterTons on the line below. What happens?
 //console.log(incomingWaterTons);      //incomingWaterTons is not defined

// DEMO: Log the variable conversionFactor on the line below. What happens?
 //console.log(conversionFactor);       // conversionFactor is not defined

/** EXAMPLE 3 - BLOCK SCOPE (Loops & Conditions) **/

let fuelPods = [20, 40, 10];

for (let i = 0; i < fuelPods.length; i++) {
	let temporaryCalculation = fuelPods[i] * 1.1;
	// DEMO: Un-comment this line to see what is happening when the loop runs
	 console.log(`Pod adjusted weight: ${temporaryCalculation} t`);
}                                                                             //Pod adjusted weight: 22 t   Pod adjusted weight: 44 t   Pod adjusted weight: 11 t

// DEMO: Log the loop variable i to the console on the line below. What happens?
//console.log(i);        // i is not defined


// DEMO: Log temporaryCalculation to the console on the line below. What happens?
//console.log(temporaryCalculation);              // temporaryCalculation is not defined

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
