/**** METHOD CHAINING: SOLUTION ****/

let messyInput = "   protocol-alpha-9   ";

/** EXAMPLE 1 - CLEAN AND SHOUT **/

// DEMO: Trim the whitespace, then transform to upper case.
let cleanedInput = messyInput.trim();
let shoutInput = cleanedInput.toUpperCase();
console.log(shoutInput);


/** EXAMPLE 2 - EXTRACT AND REPLACE **/

// DEMO: Slice out "alpha-9" (index 12 to 19), then replace "alpha" with "omega"
let removePart = messyInput.trim().slice(9).replace("alpha", "omega");
console.log(removePart);

/** EXAMPLE 3 - THE IMPORTANCE OF ORDER **/

let word = "  Space  ";

// DEMO: Trim, then grab the first character using .slice().
console.log(word.trim().slice(0 , 1));



// DEMO: Now do it in the opposite order. How is it different?
console.log(word.slice(0 , 1).trim());

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
