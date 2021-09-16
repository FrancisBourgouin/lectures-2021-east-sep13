// 5 % 2 => 1

// if (5 % 2)

// Higher Order Functions => King, CEO

// loop
// for one item
// if(conditionCB()) => 


const generateCountdown = (value) => {

  const countdown = () => console.log("we start at " + value)

  return countdown
}


const someCountdown = generateCountdown(10)
//  () => console.log("we start at " + 10)


const darkMagic = () => {
  if (true) {
    darkMagic()
  }
}

const superCoolObjectDotKeysYeah = (someObject) => {
  const keys = []
  for (const key in someObject) {
    keys.push(key)
  }
  return keys
}