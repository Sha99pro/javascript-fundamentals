/**** LOOPING OVER KEY/VALUE PAIRS ****/

// Utility helper function to draw clean sections in the console
function formatHeader(title, isAlert) {
	let cleanTitle = title.trim().toUpperCase();
	let border = isAlert ? `🚨 ==================== 🚨` : `🪐 -------------------- 🪐`;

	console.log(`\n${border}`);
	console.log(`  ${cleanTitle}`);
	console.log(`${border}`);
}

/** EXAMPLE 1 - THE FOR...IN LOOP PROTOTYPE **/

const hullIntegrityPercent = {
	sectorAlpha: 98,
	sectorBeta: 45,
	sectorGamma: 12,
};

formatHeader("Scanning Damage Matrix (for...in)", false);

// DEMO: Loop over the object and check the value for each key, printing
// either a warning (if the value is less than 50) or a status report (otherwise)
for(let sectorKey in hullIntegrityPercent){
	let statusValue = hullIntegrityPercent[sectorKey];
	if(statusValue < 50){
		console.log(`HULL BREACH WARNING: ${sectorKey} is critical at ${statusValue}%!`);
	} else{
		console.log(`System stable: ${sectorKey} reports nominal levels at ${statusValue}%.`);
	}
}

/** EXAMPLE 2 - OBJECT REFLECTION VIA FOR...OF **/

const lifeSupportReserves = {
	waterTons: 340,
	oxygenTons: 112,
	rationCrates: 450,
};

formatHeader("Extracting Value Vectors (Object.values)", false);

let combinedMass = 0;

// DEMO: Create an array of just the values from the objectj
let massValues = Object.values(lifeSupportReserves);

// DEMO: Loop over the array of values to add up the values
for(let value of massValues){
	combinedMass += value;
}

// DEMO: Print a sentence with the total that was calculated
console.log(`Total storage weight footprint calculated at : ${combinedMass} units.`);
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
