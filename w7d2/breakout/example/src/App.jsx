import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
	// const items = ["Hello", "Chicken", "Pollo", "Poulet"];
	const [items, setItems] = useState(["Hello", "Chicken", "Pollo", "Poulet"]);

	const removeItem = (name) => {
		const newItems = items.filter((item) => item !== name);

		setItems(newItems);
	};
	return (
		<div className="App">
			<List items={items} removeItem={removeItem} />
			{/* <List {...{ items, removeItem }} /> */}
		</div>
	);
}

export default App;
