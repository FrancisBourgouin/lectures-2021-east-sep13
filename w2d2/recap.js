// Functions

const someCoolFunction = function(){

}

// Arrow functions, less noise, more happiness

const someOtherFunction = () => {

}

// x => x * 2

// function(x){
//   return x * 2
// }

// Callbacks => A function being called by another function, when passed as a parameter

const francisHasBadMemory = (action) => {
  someCoolFunction() // not a callback
  action() // action the callback? (placeholder for the callback function)
 }

francisHasBadMemory(someCoolFunction) // someCoolFunction is our callback

francisHasBadMemory(() => console.log("bob"))

// () => console.log("bob")

// Reusability
// Easier syntax
// Flexibility / dynamic
// Async stuff
// Recursive