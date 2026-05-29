/**** COMMON STRING METHODS: RETRIEVING STRINGS ****/

let serialNumber = "SN-992-ALPHA";

/** EXAMPLE 1 - CHARAT **/

// DEMO: Extract the fourth character
let fourthChar = serialNumber[3];
console.log(fourthChar);

/** EXAMPLE 2 - SLICE (Range) **/

// DEMO: Extract the three-digit number from the middle
let middleNumExtract = serialNumber.slice(3 , 6);
console.log(middleNumExtract);

/** EXAMPLE 3 - SLICE (To the end) **/

// DEMO: Extract "ALPHA" using the starting index
let wordExtract = serialNumber.slice(7);
console.log(wordExtract);

/** EXAMPLE 4 - SLICE (Negative Indices) **/

// DEMO: Extract the last three characters using a negative index
let lastThreeChar = serialNumber.slice(-3);
console.log(lastThreeChar);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
