// Why pass a parameter if we can just give the function directly

const tellTheRoomie
const yellTheRoomie

const doSomethingOnEveryElement = (list, action) => {
  for (const element of list) {
    action(element)
  }
}

const showInConsole = element => console.log(element)
const list = [1, 2, 3, 4, 5]

doSomethingOnEveryElement(list, showInConsole)
list.forEach(showInConsole)


listSomething([], tellTheRoomie)
listSomething([], yellTheRoomie)

listSomething(1, 1)

// int bob = 1
// What does a return do 

// [].forEach()


const someFunction = () => {
  for (const item of []) {
    return item
  }

  if (true) {
    return true
  }
  if (false) {
    return false
  }
}

// Arrow function!

const simpleArrow = () => console.log("Hello")

const simpleArrowWithOneParam = param => console.log(param)
const simpleArrowWithOneParam = (param) => console.log(param)

const longerArrow = () => {
  const bob = "bob"
  return bob
}