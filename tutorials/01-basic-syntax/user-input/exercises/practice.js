// 1. TODO: Import the readline-sync library using CommonJS syntax

/**** CAPTURING USER INPUT FROM THE CONSOLE: PRACTICE SOLUTION ****/
const input = require("readline-sync");
/*
    Reminder: I have already included readline-sync in the package.json 
    file in this codebase; you just need to run the `npm install` command 
    at the project root and make sure a package-lock.json is created for your 
    local copy of this repository if it doesn't already exist.
*/

// 2. TODO: Ask the user, "What is your destination planet?"
// Store it in a variable and respond with, "Course set for [Planet Name]."
const destinationPlanet = input.question("What is your destination planet");
console.log(`Course set for ${destinationPlanet}`);

// 3. TODO: Ask the user, "How many metric tons of fuel remain?"
// Use the method that allows for decimals.
// Print, "Fuel levels confirmed at [Amount] metric tons."
const remainingFuel = input.questionFloat("How many metric tons of fuel remain?") ;
console.log(`Fuel levels confirmed at ${remainingFuel} metric tons.`)


// 4. TODO: Ask the user, "How many crew members are currently on the ship?"
// Use the method that requires a whole number (integer).
// Print, "Initializing life support for [Count] individuals."
const crewCountInShip = input.questionInt("How many crew members are currently on the ship?");
console.log(`Initializing life support for ${crewCountInShip} individuals.`);

// 5. TODO: Combine all three inputs previously gathered into a single template
// literal message that has several lines and serves as a flight log, then print it.
const flightSummary = `----Full flight Log----
Travel to the planet ${destinationPlanet} is getting started. 
With ${crewCountInShip} crew members aboard and ${remainingFuel} metric tons of fuel in the reserves, 
the mission status is currently normal.
`;
console.log(flightSummary);
// TODO: Before you go... don't forget to make a git commit!
