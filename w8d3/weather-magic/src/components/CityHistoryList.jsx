import CityHistoryListItem from "./CityHistoryListItem";

export default function CityHistoryList(props) {
	const { setCurrentCity, cityHistory } = props;

	const parsedCityHistoryListItem =
		Array.isArray(cityHistory) &&
		cityHistory.map((city) => (
			<CityHistoryListItem
				key={city}
				cityName={city}
				onClick={() => setCurrentCity(city)}
			/>
		));
	return (
		<div className="CityHistoryList">
			<h1>History of city searches.</h1>
			<ul>{parsedCityHistoryListItem}</ul>
		</div>
	);
}
