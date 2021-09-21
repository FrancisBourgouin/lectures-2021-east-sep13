// Types of functions

// Higher order function : HoF : works with the help of a callback function
// Higher order function : HoF : returns a function definition
// 'Normal' function : works without any outside help

// Helper functions

const round = (number) => {
  return Math.round(number)
}

const convertTemperature = (tempInF) => {
  return round((tempInF - 32) * 5/9)
}

// Callback !== Async
// Async needs callbacks


// Sync first, async after