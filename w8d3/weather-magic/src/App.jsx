import { useEffect, useState } from "react";
import "./App.css";
import CityForm from "./components/CityForm";
import CityHistoryList from "./components/CityHistoryList";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityHistory, setCityHistory] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (currentCity) {
      const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
      fetch(`//api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${APIKEY}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === "404") {
            return setWeatherData(null);
          }
          if (!cityHistory.includes(currentCity)) {
            setCityHistory([...cityHistory, currentCity]);
          }
          setWeatherData(data);
        });
    }
  }, [currentCity]);

  const addCityFromForm = (formData) => {
    const { city } = formData;

    setCurrentCity(city);
  };

  return (
    <div className="App">
      <h1>Weather Life Yeah.</h1>
      <CityForm onSubmit={addCityFromForm} />
      <CityHistoryList cityHistory={cityHistory} setCurrentCity={setCurrentCity} />
      {currentCity && weatherData && (
        <CurrentWeather currentCity={currentCity} weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
