const greetings = () => console.log("greetings")

const very = setInterval(greetings, 1000)

setTimeout(() => {
  clearInterval(very)
},5000)


const someFunction = (data, callback) => {
  console.log("playing with: ", data)
  callback(data)
  return "yes"
}

const bob = someFunction("hello", greetings)

const someFunction = () => console.log("bob")