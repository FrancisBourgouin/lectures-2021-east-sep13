const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const kitchen = new MyEmitter();
// Only do this once so we don't loop forever

kitchen.on("dirtydishes", () => {
  console.log("dang it, cleaning again.")
})

kitchen.on("order", () => {
  console.log("let's prepare the order!")
})

const newOrder = () => {
  kitchen.emit("order")
  kitchen.emit("order")
  kitchen.emit("order")
  kitchen.emit("order")
  kitchen.emit("order")
}

newOrder()