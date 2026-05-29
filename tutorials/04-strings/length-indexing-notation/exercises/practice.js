/**** STRING LENGTH, INDEXING, AND BRACKET NOTATION: PRACTICE ****/

/*
    Use bracket notation and the .length property to 
    extract data from these strings.
*/

/** EXERCISE 1: THE FIRST INITIAL **/

let planet = "Jupiter";

// TODO: Store the first character of the planet's name in a variable,
// then log it to the console.
let firstCharInPlanet = planet[0];
console.log(firstCharInPlanet);

/** EXERCISE 2: STRING SURVEY **/

let entryCode = "XJ-99-ALPHA";

// TODO: Store the length of the 'entryCode' string in a variable and log it.
let lengOfentryCode = entryCode.length;
console.log(lengOfentryCode);

/** EXERCISE 3: DYNAMIC INDEXING **/

let shuttleID = "Discovery-5";

// TODO: Without counting manually, grab the LAST character of the
// shuttleID string and log it.
let lastCharInshuttleID = shuttleID[shuttleID.length - 1];
console.log(lastCharInshuttleID);

/** EXERCISE 4: COORDINATE SNAGGING **/

let coordinates = "001-992-X";

// TODO: Use bracket notation to store the 4th character of the coordinates
// string. Remember, the index of the 4th character is not 4!
let fourthCharCoordinates = coordinates[3];
console.log(fourthCharCoordinates);

// Great job!
