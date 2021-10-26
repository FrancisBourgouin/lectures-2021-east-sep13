const nameStuff = () => {
	const person = { name: "Bob" };

	const changeName = (newName) => {
		person.name = newName;
	};

	const printName = () => console.log(person);

	return { changeName, printName };
};

const callOne = nameStuff();

callOne.printName(); // Bob
callOne.changeName("Pollo");

const callTwo = nameStuff();

callTwo.printName(); // Bob
callTwo.changeName("Pock Pock");

callOne.printName(); // Pollo
callTwo.printName(); // Pock Pock


const App = () => {

  const changeName = () ...
  return(
    {Form(changeName)}
    )
  }

App
  Sibling1
  Sibling2