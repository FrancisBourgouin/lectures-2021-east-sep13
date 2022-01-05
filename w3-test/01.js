/* Question 01

Convert an array of arrays into an object.

This is the inverse of the previous question.

Arrays will only have two elements: [key, value]

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples:

- arrayToObject([['a', 1], ['b', 2], ['c', 3]])
  => { a: 1, b: 2, c: 3 }
- arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])
  => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}
*/

// Input : [['a', 1], ['b', 2], ['c', 3]]
// First entry of input: ['a',1]
// Output : { a: 1, b: 2, c: 3 }
// First obj pair : a:1

// output[firstEntry[0]] = firstEntry[1];

// Take in an array of arrays
const arrayToObject = (input) => {
  // Define the output object
  const output = {};
  // Iterate over the array of array
  for (const arr of input) {
    // const key = arr[0]
    // const value = arr[1]
    const [key, value] = arr;
    // define the key of the object with the first value of the array
    // define the value of the object at the specific key with the second value of the array
    output[key] = value;
  }
  // return the output object
  return output;
};

const result = arrayToObject([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(result);
