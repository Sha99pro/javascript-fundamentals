/**** STRING LENGTH, INDEXING, AND BRACKET NOTATION ****/

let shipName = "Galactic Nova";

/** EXAMPLE 1 - THE LENGTH PROPERTY **/

// DEMO: Store the length of the ship's name in a variable,
// then log it to the console.

<<<<<<< HEAD
let shipNameLength = shipName.length;
console.log(shipNameLength);

/** EXAMPLE 2 - BRACKET NOTATION **/ 
=======
/** EXAMPLE 2 - BRACKET NOTATION **/
>>>>>>> upstream/main

// DEMO: Store the first character of the ship's name in a variable,
// then log it to the console.
let firstCharInShipName = shipName[0];
console.log(firstCharInShipName);

// DEMO: Store the tenth character of the ship's name in a variable,
// then log it to the console.
let tenthCharInShipName = shipName[9];
console.log(tenthCharInShipName);

/** EXAMPLE 3 - FINDING THE LAST CHARACTER **/

// DEMO: Store the last character of the ship's name in a variable,
// then log it to the console.
let lastCharInShipName = shipName[shipNameLength - 1];
console.log(lastCharInShipName);


/** EXAMPLE 4 - OUT OF BOUNDS **/

// DEMO: Store the (nonexistent) 99th character of the ship's name
// in a variable, then log it to the console. What do you see?
let nonExistCharInShipName = shipName[99];
console.log(nonExistCharInShipName);


// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
