export default function CityHistoryListItem(props) {
	const { cityName, onClick } = props;
	return (
		<li>
			<button onClick={onClick}>{cityName}</button>
		</li>
	);
}
