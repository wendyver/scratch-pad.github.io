// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
 /*
 I: array
 O: print out each value
 C: use console.log
 E: loop forward
 */ 

  //loop over the array and print each element
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  /*
 I: array
 O: print out each value (in reverse order)
 C: use console.log
 E: loop backwards
 */ 

  //loop over the array and print each element
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
   /*
 I: object
 O: array containing object keys
 C: use return
 E: use for in loop to get keys
 */ 
//loop through the keys in the object
let arrayWithObjectKeys = [];
for (let key in object) {
  arrayWithObjectKeys.push(key);
}
return arrayWithObjectKeys;  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
   /*
 I: object
 O: print object keys
 C: use console.log
 E: use for in loop to get keys
 */ 
 // loop through all of the keys in the object
for (let key in object) {
  // print them to the console
  console.log(key);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
   /*
 I: object
 O: array containg the object's values
 C: use return
 E: use for in loop to get values
 */ 
// create storage array for object values
 let arrayWithObjectValues = [];
 // loop through object
for (let key in object) {
  // push object values to array
  arrayWithObjectValues.push(object[key]);
}
// return array
return arrayWithObjectValues;  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
   /*
 I: object
 O: print object's values to the console
 C: use console.log
 E: use for in loop to get values
 */ 
  
 // loop through all of the keys in the object
for (let key in object) {
  // print values to the console
  console.log(object[key]);
}
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // create count variable to store the number of key/value pairs
  let count = 0;
  // loop throught the object's key/value pairs
  for (let key in object) {
    //increase the count
    count++;
  }
  // return count
  return count;
   
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  let reversedObjectArray = Object.keys(object).reverse();
  
  for (let i = 0; i < reversedObjectArray.length; i++) {
    let key = reversedObjectArray[i];
    let value = object[key];
    console.log(value);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}