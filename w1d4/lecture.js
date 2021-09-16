// Why do we use variables ?

const countHowManyPotatoes = function (list) {
  // Prepare a counter value, set 0
  let counter = 0
  // List the elements
  for (const item of list) {
    // If an element is a potato then
    if (item === "🥔") {
      // increment by one the counter
      counter++
    }
  }
  // return the counter value
  return counter
}

// ["🛶","🙈"], "🍜" => 0
const countHowManySomething = function (list, something) {
  // Prepare a counter value, set 0
  let counter = 0
  // List the elements
  for (const item of list) {
    // If an element is a potato then
    if (item === something) {
      // increment by one the counter
      counter++
    }
  }
  // return the counter value
  return counter
}

const list = ["🥔", "🪓", "🗿", "🤖"]
const otherList = ["🥔", "🪓", "🗿", "🤖", "🥔", "🥔"]

console.log(countHowManyPotatoes(list))
console.log(countHowManyPotatoes(otherList))

// Why do we use functions?

const listItemInTheFridge = (fridge, action) => {
  // If it's an empty fridge, yell what the hell
  if (!fridge.length) { // if(fridge.length === 0)
    return console.log("what the hell")
  }
  // List every item in the fridge
  for (const element of fridge) {
    // console.log a lowercase string of the fridge element in the shape of There is X
    // console.log(`There is ${element} in the fridge`)
    action(element)
  }
}

const rudeTelling = item => console.log(item)
const tellTheRoomie = item => console.log(`There is ${item} in the fridge`)
const yellTheRoomie = item => {
  let message = `There is ${item} in the fridge`

  console.log(message.toUpperCase())
}

const francisFridge = ["🍜", "🍕", "🔥", "🎂", "🥟"]

// listItemInTheFridge(francisFridge, tellTheRoomie)

// listItemInTheFridge(francisFridge, yellTheRoomie)

// listItemInTheFridge(["🐸", "❄"], item => console.log(item))




const complexerPantry = [
  { category: "can", name: "tuna", quantity: 1 },
  { category: "can", name: "corn", quantity: 2 },
  { category: "can", name: "burger", quantity: 5 },
  { category: "box", name: "baking soda", quantity: 2 },
  { category: "jar", name: "jam", quantity: 10 },
  { category: "box", name: "chocolate chips", quantity: 9001 }
]


const betterOrganizePantry = (pantry, conditionCB) => {
  // go over every item in the pantry, 
  // and create a new array containing the acceptable values

  // define a structure (array)
  const filteredList = []
  // iterate over every element
  for (const foodItem of pantry) {
    // if the category of an element is 'category', add it to the array
    if (conditionCB(foodItem)) {
      filteredList.push(foodItem)
    }
  }
  // return the structure
  return filteredList
}

const filterItemByQuantity = (foodItem) => foodItem.quantity > 5
const filterItemByOddQuantity = foodItem => foodItem.quantity % 2
const filterItemByFunkyCondition = foodItem => {
  if (foodItem.quantity % 2) {
    return false
  }
  if (foodItem.category === "can") {
    return false
  }
  return true
}
const filterItemCrazy = foodItem => {
  if (Math.random() > 0.4) {
    return true
  }
  return false
}
// const otherResult = betterOrganizePantry(complexerPantry, filterItemByQuantity)
// const otherResult = betterOrganizePantry(complexerPantry, filterItemByOddQuantity)
// const otherResult = betterOrganizePantry(complexerPantry, filterItemByFunkyCondition)
// const otherResult = betterOrganizePantry(complexerPantry, filterItemCrazy)
const otherResult = complexerPantry.filter(filterItemCrazy)

console.log(otherResult)

// Same inner workings as the .filter method!
const organizePantry = (pantry, category, quantity) => {
  // go over every item in the pantry, 
  // and create a new array containing the acceptable values

  // define a structure (array)
  const filteredList = []
  // iterate over every element
  for (const foodItem of pantry) {
    // if the category of an element is 'category', add it to the array
    if (foodItem.category === category) {
      filteredList.push(foodItem)
    }
  }
  // return the structure
  return filteredList
}

const result = organizePantry(complexerPantry, "box")

// console.log(result)

// x + y = 20
// x + 2y = 40