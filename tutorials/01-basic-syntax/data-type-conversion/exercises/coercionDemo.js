/**** IMPLICIT CONVERSION (TYPE COERCION) ****/

/** EXAMPLE 1 - CONCATENATION **/

let sectorText = "Sector";
let sectorNumber = 7;

let sectorCode = sectorText + " " + sectorNumber;
console.log(sectorCode);
console.log(typeof sectorCode);

// DEMO: Concatenate the two variables above and store in a
// new variable; print it and its type to the console.

/** EXAMPLE 2 - ARITHMETIC **/

let totalDistanceKm = "1000";
let distanceTraveledKm = 400;
let oxygenLevel = "60";

let remainingDistance = totalDistanceKm - distanceTraveledKm;
console.log(remainingDistance);
console.log(typeof remainingDistance);

// DEMO: Calculate the remaining distance and store in a
// new variable; print it and its type to the console.

let doubleOxygenLevel = oxygenLevel * 2;
console.log(doubleOxygenLevel);
console.log(typeof doubleOxygenLevel);
// DEMO: Double the oxygen level and store in a
// new variable; print it and its type to the console.

/** EXAMPLE 3 - ANTICIPATING ERRORS WITH TYPE COERCION **/

let totalCargoMass = "12000 kg";
let numberOfCargoHolds = 3;

let averageCargoMassPerHold = totalCargoMass / numberOfCargoHolds;
console.log(averageCargoMassPerHold);


// DEMO: Calculate the average mass per hold and store in a
// new variable; print it to the console to see the result.

// DEMO: Use explicit conversion as needed to complete the mathematical
// calculation, then use implicit conversion to add ' kg' to the result.
// Print the final result and its type to the console.
let avgMassPerHold = parseInt(totalCargoMass) / numberOfCargoHolds + " " + "kg";
console.log(avgMassPerHold);
console.log(typeof avgMassPerHold);




// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
