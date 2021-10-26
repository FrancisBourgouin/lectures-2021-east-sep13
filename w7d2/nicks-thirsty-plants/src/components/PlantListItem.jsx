// interface somePlant {
// 	id: String;
// 	name: String;
// 	wateringInterval: Int;
// 	lastWatered: String;
// }

export default function PlantListItem(props) {
	const { name, lastWatered, wateringInterval } = props;
	return (
		<article>
			<h1>{name}</h1>
			<p>{lastWatered}</p>
			<p>{wateringInterval}</p>
			<p>next watering day</p>
			<button>water</button>
			<button>evidence removal</button>
		</article>
	);
}
