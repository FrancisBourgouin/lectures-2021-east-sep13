/* Question 02

Write a function which will split an array into two arrays (i.e. partition it).

It will take two parameters, the first is an array of Integer values, and the second will be a callback which will return a boolean. If the callback returns true for an element, it should be placed into the left array, otherwise it should be placed into the right array.

Examples:

- partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0)
  => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
- partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0)
  => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]

*/

// Input : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected Output: [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]

// If condition true, go in the left array (0), if not, go in the right array (1)
// [[],[]]
// ---<

// Take in an array of values
// Take in a callback (that will evaluate the value)
const partition = (input, conditionCB) => {
  // Create the array of array structure
  const output = [[], []];
  // Iterate over the array of values
  for (const value of input) {
    //  if the condition of the callback is met
    if (conditionCB(value)) {
      //    Put the value in the first array (0)
      output[0].push(value);
    } else {
      //  else
      //    Put the value in the second array (1)
      output[1].push(value);
    }
  }
  // return the array of array
  return output;
};

// Weeks of programming can save hours of planning

const result = partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n) => n % 2 === 0);
console.log(result);
