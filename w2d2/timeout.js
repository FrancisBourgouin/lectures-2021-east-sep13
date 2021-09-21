// Asynchronous -> Long tasks

// File read, intensive CPU, network calls

// JS -> Event Loop

// Rules of asynchronouscity
// - Is the caller async? caller is sync
// - A async call doesn't 'infect' the parent function


const doStuffAsync = (stuff) => {
  setTimeout(stuff, 1000)
  console.log("waiting a sec!")
}

// console.log("Something")

// for(let i = 0; i < 10; i++){
//   const waitTime = 1000 * (i + 1)

//   setTimeout(() => { // Philly steak rule : Snooze you lose.
//     console.log("Hello!")
//   },waitTime)
// }

// console.log("Bye")


let chicken = "🐣" // SYNC 1

setTimeout( // SYNC 2
  () => { // ASYNC 4
  chicken = "🐔"
},5000)

setTimeout(// SYNC 3
  () => { // ASYNC 5
  console.log(chicken) 

},0)
