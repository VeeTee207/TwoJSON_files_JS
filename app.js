'use strict';

/**
 * Find difference between two objects and display it
 * @param  {object} obj1 - First object to compare obj2 against
 * @param  {object} obj2  - New object with potential changes
 */
function deepComparison(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // Initialization bigest key iterator
    let biggestKey = keys2.length; 
    if (keys1.length > keys2.length) {
        biggestKey = keys1.length;
    }

    console.log(biggestKey);
    //Create the arrays of values for each parameter
    const value1 = Object.values(obj1); 
    const value2 = Object.values(obj2);

    //Iterate each array
    for (let i=0; i<biggestKey; i++) {
    const bothObjects = includeObject(value1[i]) && includeObject(value2[i]); 
        /**
         * Find difference between two objects and display it
         * Test for first condition: keys of both are equeal
         * Test for second condition: values are equal
         * Test for third condition: values are objects
         */
        if (
            !(keys1[i] === keys2[i] && value1[i] === value2[i]) &&
            !(bothObjects)
            ) {
                console.log(`personA key '${keys1[i]}' has value '${value1[i]}' \npersonB key '${keys2[i]}' has value '${value2[i]}' \n`);
        }

        // execute recursively if the property is object too
        if (bothObjects) { 
            deepComparison(value1[i], value2[i]); 
        }
    }
}

/* Check if paramer obj is object */
function includeObject(obj) {
    // check if not empty object
    return obj != null && typeof(obj) === 'object' ;
}


/* Usage */

const args = process.argv.slice(2);

const personA = require('./'+ args[0]);
const personB = require('./'+ args[1]);

// Get the comparison of two objects!
deepComparison(personA, personB);
