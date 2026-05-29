/**** PROCEDURAL RECURSION ****/

<<<<<<< HEAD
const { setBufferSize } = require("readline-sync");

/** EXAMPLE 1 - THE RADAR PING TRAVERSAL (Countdown) **/ 
=======
/** EXAMPLE 1 - THE RADAR PING TRAVERSAL (Countdown) **/
>>>>>>> upstream/main

// DEMO: Define a function that continues to report the signal strength of a
// radar ping moving farther and farther away until it can't be detected
function radarSignalStrength(signalPower) {
    console.log(`Radar strength: ${signalPower} dBm`);

    if (signalPower <= 0) {
        return "Signal lost";
    }

    return radarSignalStrength(signalPower - 10);
}

// Start the radar ping at 60 dBm
console.log(radarSignalStrength(60));

// DEMO: Call the function, starting with a ping at 60 dBm strength
<<<<<<< HEAD
console.log(radarSignalStrength(60));
=======
>>>>>>> upstream/main

/** EXAMPLE 2 - DIVIDE AND CONQUER (Grid Sub-division) **/

// DEMO: Simulate search-and-rescue teams splitting up grid sectors
function scanGridSector(sectorName, sectorSizeKm) {
	// BASE CASE: Sector is small enough for a single drone to scan
	if (sectorSizeKm <= 5) {
		console.log(`Drone deployed to scan ${sectorName} (${sectorSizeKm}km zone).`);
		return;
	}

    // RECURSIVE CASE: Sector is too big. Split it in half.
    	let subSectorSize = sectorSizeKm / 2;
	console.log(
		`Sector ${sectorName} (${sectorSizeKm}km) too large. Sub-dividing...`
	);

    //Recursive call
    scanGridSector(sectorName , subSectorSize);
}

// DEMO: Call the function with a starting size of 20km
scanGridSector("Main Grid", 20);
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
