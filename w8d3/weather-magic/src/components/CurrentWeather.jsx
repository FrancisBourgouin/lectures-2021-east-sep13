export default function CurrentWeather(props) {
  const { currentCity, weatherData } = props;

  const windSpeed = weatherData.wind && weatherData.wind.speed;
  const temperature = weatherData.main && weatherData.main.temp;
  const conditions = weatherData.weather && weatherData.weather[0].description;

  return (
    <section>
      <h1>Current weather info</h1>
      <ul>
        <li>Wind speed is: {windSpeed}</li>
        <li data-testid="location">Location is: {currentCity}</li>
        <li>Temperature is: {temperature}</li>
        <li>Conditions are: {conditions}</li>
      </ul>
    </section>
  );
}
