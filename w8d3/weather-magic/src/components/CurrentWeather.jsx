export default function CurrentWeather(props) {
	const { windSpeed, currentCity, temperature, conditions } = props;

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
