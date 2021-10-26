import logo from "./logo.svg";
import "./App.css";
import PlantListItem from "./components/PlantListItem";

function App() {
	const plant2 = {
		id: "b",
		lastWatered: "2021-10-26",
		name: "Ficus",
		wateringInterval: 11,
	};

	return (
		<div className="App">
			<PlantListItem {...plant2} />
		</div>
	);
}

export default App;
