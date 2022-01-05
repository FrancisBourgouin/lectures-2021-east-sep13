/* Question 00

Convert a given object into an array of arrays.

Given an object, create an array which contains arrays with the key/value pairs.

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples

- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]

*/

// Input : { a: 1, b: 2, c: 3 }
// Expected output: [['a', 1], ['b', 2], ['c', 3]]

// {            [
//   a : 1       [a,1]
//   b : 2  =>   [b,2]
//   c : 3       [c,3]
// }            ]

// a => arr[0][0] = a
// obj.a => arr[0][1] = obj.a

// Take in an object
const objectToArray = (input) => {
  // Create an empty array called result
  const result = [];
  // For every key of the object we want to:
  for (const key in input) {
    // for(const key of Object.keys(input))
    // make a baby array
    const pair = [];
    // give the key to an array (first position)
    pair.push(key);
    // give the value to an array (second position)
    pair.push(input[key]);
    // push the array in the result
    result.push(pair);
  }
  return result;
};

const result = objectToArray({ a: 1, b: 2, c: 3 });
console.log(result);
