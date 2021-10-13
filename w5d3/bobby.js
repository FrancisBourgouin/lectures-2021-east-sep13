const initializeGreetings = (name) => {
	const sayHello = () => console.log(`Hello ${name}`);
	const sayBye = () => console.log(`Bye ${name}`);
	const sayWTF = () => console.log(`WTF ${name}`);

	return { sayHello, sayBye, sayWTF };
};

// const sayHello = () => console.log(`Hello ${name}`);

const nickGreeting = initializeGreetings("Nick");
const parrisGreeting = initializeGreetings("Parris");

nickGreeting.sayHello();
parrisGreeting.sayHello();

const bob = () => {
	const name = "Francis";
	const potato = Math.random() > 0.4;

	const showThePotato = () => {
		if (potato) {
			console.log("🥔");
		}
	};

	return showThePotato;
};

const { showThePotato } = bob();

showThePotato();
