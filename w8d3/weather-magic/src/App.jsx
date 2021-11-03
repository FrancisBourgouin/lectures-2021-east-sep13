import { useState } from "react";
import "./App.css";
import CityForm from "./components/CityForm";
import CityHistoryList from "./components/CityHistoryList";
import CurrentWeather from "./components/CurrentWeather";

function App() {
	const [currentCity, setCurrentCity] = useState("");
	const [cityHistory, setCityHistory] = useState([]);

	const addCityFromForm = (formData) => {
		const { city } = formData;

		setCurrentCity(city);

		if (!cityHistory.includes(city)) {
			setCityHistory([...cityHistory, city]);
		}
	};

	return (
		<div className="App">
			<h1>Weather Life Yeah.</h1>
			<CityForm onSubmit={addCityFromForm} />
			<CityHistoryList
				cityHistory={cityHistory}
				setCurrentCity={setCurrentCity}
			/>
			{currentCity && <CurrentWeather currentCity={currentCity} />}
		</div>
	);
}

export default App;
