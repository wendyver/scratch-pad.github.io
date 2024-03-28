// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
  /*
  I: two integers
  O: an Array containing all integers  between the two parameters, inclusively
  C: collect output array; use a loop; use push
  E: if the first argument is greater than the second, return the range in reverse order,
  */  
  // create container array
    let containerArray = [];
     // if start is smaller than end
    if (start < end) {
        // loop from start to end
        for (let i = start; i <= end; i++) {
            containerArray.push(i);
        }
        return containerArray;
    } else if (start > end) {
        for (let j = start; j >= end; j--) {
            containerArray.push(j);
        }
        return containerArray;
    }
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}