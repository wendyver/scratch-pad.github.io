// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
  /*
  I: input base (could be string or number)
  O: funtion that tests whether a given value is greater than the bas
  C: return a function
  E: input could be string or number
  */ 
// declare a function that tests whether a given value is greater than the base
 let greaterThanFilter = function(value) {
    // if the value is greater than the bas
    if (value > base) {
        // return true
        return true;
        // otherwise return false
    } else {
        return false;
    }
 }
 // return the function greaterThanFilter
  return greaterThanFilter;  
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
  /*
  I: input base (could be string or number)
  O: funtion that tests whether a given value is less than the base
  C: return a function
  E: input could be string or number
  */ 
// declare a function that tests whether a given value is less than the base
let lessThanFilter = function(value) {
    // if the value is less than the bas
    if (value < base) {
        // return true
        return true;
        // otherwise return false
    } else {
        return false;
    }
 }
 // return the function lessThanFilter
  return lessThanFilter;    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // declare functio  that takes a string as the parameter
    let startsWithFunction = function(string) {
        // create a variable to store lowercase startsWith
    let lowerCaseStartsWith = startsWith.toLowerCase();
    // create variable to store lowercase 1st letter of string
    let lowerCaseStringStartsWith = string[0].toLowerCase();
    // if they are the same
   if (lowerCaseStartsWith === lowerCaseStringStartsWith) {
    // return true
    return true;
   } else {
    // return false
    return false;
   }
}
return startsWithFunction;
    // YOUR CODE ABOVE HERE //
    }

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
   // declare functio  that takes a string as the parameter
   let endsWithFunction = function(string) {
    // create a variable to store lowercase endsWith
let lowerCaseEndsWith = endsWith.toLowerCase();
// create variable to store lowercase 1st letter of string
let lowerCaseStringEndsWith = string[string.length - 1].toLowerCase();
// if they are the same
if (lowerCaseEndsWith === lowerCaseStringEndsWith) {
// return true
return true;
} else {
// return false
return false;
}
}
return endsWithFunction;  
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
  /*
  I: an Array of Strings and a Function designed to modify a String
  O: return the Array of the Strings, modified
  C: loop over the strings; pass each String to the modify Function
  E: collect the results into some collection.
 */     
  // create collection variable to store collection results  
    let collection = [];
    for (let i = 0; i < strings.length; i++) {
       let modifiedString = modify(strings[i]);
        collection.push(modifiedString);
    }

    return collection;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
 /*
  I: an Array of Strings and a Function designed to test the String in some way
  O: return a Boolean on whether it passed
  C: return true if ALL Strings pass the test
  E: only return true if ALL strings pass the test
  */    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}