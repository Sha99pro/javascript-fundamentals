/**** COMMON STRING METHODS: RETRIEVING STRINGS: PRACTICE ****/

/*
    Use .charAt() and .slice() to extract specific 
    data points from these strings.
*/

/** EXERCISE 1: INITIAL EXTRACTION **/

let missionID = "SCI-101-MARS";

/*
    TODO: Extract the first 3 characters of 'missionID' 
    to get the department code, then log it to the console.
*/
let firstThreeChar = missionID.slice(0 , 3);
console.log(firstThreeChar);


/** EXERCISE 2: BIT BY BIT **/

let binaryString = "110100101";

/*
    TODO: Use .charAt() to grab the character at index 5 
    of the 'binaryString', then log it to the console.
*/
let charAtIndex = binaryString.charAt(5);
console.log(charAtIndex);

/** EXERCISE 3: END OF THE LINE **/

let launchDate = "July-20-1969";

/*
    TODO: Extract the year from the end of the 
    'launchDate' string (the last 4 characters), 
    then log it to the console.
*/
let year = launchDate.slice(-4);
console.log(year);

/** EXERCISE 4: THE MIDDLE MAN **/

let movieTitle = "Morning Star Project";

/*
    TODO: Extract the word "Star" from the string below.
    It starts at index 9 and ends before index 13, 
    then log it to the console.
*/
let middleWord = movieTitle.slice(8 , 12);
console.log(middleWord);

// Great job!
