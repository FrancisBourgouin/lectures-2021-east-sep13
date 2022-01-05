/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value: [key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

// Flattening, recursing

// Input : [['a', 1], ['b', 2], ['c', [['d', 4]]]]

// [
//   ["a", 1],
//   ["b", 2]

// ],
//   ["c", [
//           ["d", 4]
//         ]
//   ],
// ];

// [
//   ["d", 4]
// ]

// {d:4}

const deepArrayToObject = (input) => {
  // Define the output object
  const output = {};
  // Iterate over the array of array
  for (const arr of input) {
    const [key, value] = arr;
    //  if the second value of the array is not an array
    if (!Array.isArray(value)) {
      //    define the key of the object with the first value of the array
      //    define the value of the object at the specific key with the second value of the array
      output[key] = value;
    } else {
      //  else
      //    run deepArrayToObject on the array value assign it to a var
      const result = deepArrayToObject(value);
      //    define the key of the object, with the value of the result of top
      output[key] = result;
    }
  }
  // return the output object
  return output;
};
