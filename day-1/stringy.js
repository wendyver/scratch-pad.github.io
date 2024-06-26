// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */
// hello
/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
/*
I: string
O: NEW STRING (given string converted to lowercase)
*/
//force given string to lowercase
  //create new string
let lowerCaseString = string;
return lowerCaseString.toLowerCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//create a new string version of string so that string cn be changed later
let upperCaseString = string;
//convert upperCaseString to an uppercase version of string and return it
return upperCaseString.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
      //create new variable, dashedString, so that it can be modified and then returned
       //convert string to dash-case
      //force string to lowercase
    let lowerCaseString = string.toLowerCase();
     //create dashCaseString to hold a lowerCaseString that will be modified as follows:
      // lowerCaseString is split at every space
       // and then joined back together using dashes
      let dashCaseString = lowerCaseString.split(" ").join("-");
        //return new dashCaseString
        return dashCaseString;
 // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
/*
I: a string and a character
O: a boolean; true if the string starts with the char
C: must be case insensitive
E: when cases don't match
*/
//get the firstCharacter of the input strimg
let firstCharacter = string[0];
//convert that 1st char to lowercase
let lowerFirstChar = firstCharacter.toLowerCase();
//convert the input char to lowercase
let lowerCaseChar = char.toLowerCase();
//compare the lowerFirstChar of the string to the lowerCaseChar
// if they're the same, return true
//if they're not, return false
if (lowerFirstChar === lowerCaseChar) {
    return true;
} else {
    return false;
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

// get last letter of string
let lastLetterOfString = string[string.length-1];
// change last letter of string to lowercase
let lowerCaseLastLetter = lastLetterOfString.toLowerCase();
// change char to lowercase
let lowerCaseChar = char.toLowerCase();
// compare last letter of string and char (both lowwwercase)
return lowerCaseLastLetter === lowerCaseChar;
// if same, return true
// If different, return false


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// Given two input Strings, return the Strings concatenated into one.
  // use the + operator (plus sign)
   // create new variable to store concatenated strings
  let concatenatedStrings = stringOne + stringTwo;
    // return concatenatedStrings
  return concatenatedStrings;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // args is now an array with its elements being the two given arguments, stringOne and stringTwo
     // join the two elements of the args array
    let joinedStrings = args.join("");
      // return joinedStrings;
    return joinedStrings;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// return longest of given strings
 // find length of stringOne
  // find length of stringTwo
   // compare the lengths of the two strings
    // return the longest
 if (stringOne.length > stringTwo.length) {
    return stringOne;
 }  else {
    return stringTwo;
 }
 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// if stringOne is higher in alphabetical order than stringTwo, return 1
 // if stringTwo is higher in alphabetical order than stringOne, return -1
  // if string One and stringTwo are equal, return 0

if (stringOne < stringTwo) {
    return 1;
} else if (stringTwo < stringOne) {
    return -1;
} else if (stringOne === stringTwo) {
    return 0;
}
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// if s1 is lower in alphabetical order than s2, return 1
 // if s2 is lower in alphabetical order than s1, return -1
  // if s1 and s2 are equal, return 0

  if (stringOne > stringTwo) {
    return 1;
} else if (stringTwo > stringOne) {
    return -1;
} else if (stringOne === stringTwo) {
    return 0;
}

    // YOUR CODE ABOVE HERE //
}
 

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}