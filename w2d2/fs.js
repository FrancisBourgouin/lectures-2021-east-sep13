const fs = require("fs") // Filesystem

// Node: JavaScript Interpreter
// Node Librairies: Interact with the environment

console.log("I'm about to create a file!")

// Start the writing action
// emit writing done
// the listener will catch the event, then start the callback

fs.writeFile("./pollo.txt", "🐔", (err) => {
  if(err){
    console.log("OH NO", err)
  } else {
    console.log("Done writing the file")
  }
})

fs.readFile("./pollo.txt", {encoding:"utf8"}, (err, data) => {
  if(err){
    return console.log("OH NO", err)
  }
  console.log(data)
})