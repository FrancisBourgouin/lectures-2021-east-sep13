// interface somePlant {
// 	id: String;
// 	name: String;
// 	wateringInterval: Int;
// 	lastWatered: String;
// }

export default function PlantListItem(props) {
	const { name, lastWatered, wateringInterval } = props;

	const todayDate = new Date();
	const lastWateredDate = new Date(lastWatered);

	const timeDifference = todayDate.getTime() - lastWateredDate.getTime();
	const timeDifferenceInDays = timeDifference / 1000 / 86400;

	const style = {
		border: "2px solid black",
		borderColor: timeDifferenceInDays < wateringInterval ? "green" : "red",
	};
	return (
		<article style={style}>
			{timeDifferenceInDays < wateringInterval ? "GOOD" : "BAD"}
			<h1>{name}</h1>
			<p>{lastWatered}</p>
			<p>{wateringInterval}</p>
			<p>next watering day</p>
			<button>water</button>
			<button>evidence removal</button>
		</article>
	);
}
