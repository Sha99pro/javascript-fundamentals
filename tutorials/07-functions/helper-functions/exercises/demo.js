/**** HELPER FUNCTIONS ****/

/** EXAMPLE **/

// DEMO: Define a function that calculates a metric conversion
function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25)); 

// DEMO: Define a function that checks if a value crosses a safety threshold
function safetyCheckThreshold(value){
    const critical_Temp =  3000;
    return value > critical_Temp;
   
}
console.log(safetyCheckThreshold(1000));


// DEMO: Write a primary function that assesses the reactor safety
// and prints a report with either a warning or a nominal message
function reactorSafetyCheck(currentCelsius){
    let fahTemp = celsiusToFahrenheit(currentCelsius);
    let threatDetected = safetyCheckThreshold(fahTemp);


    if(threatDetected){
        console.log(`CRITICAL: Core is ${fahTemp}F `);
    }else{
        console.log(`Nominal. ${fahTemp}F`);
    }
}



// DEMO: Call the primary function
reactorSafetyCheck(3050);
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
