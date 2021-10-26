import PlantListItem from "./PlantListItem";
import { listOfPlants } from "../data/plantData";

// interface listOfPlants {
// 	id: somePlant;
// }

export default function PlantList(props) {
	console.log("potato", listOfPlants);
	// const output = [];
	// for (const key in listOfPlants) {
	// 	listOfPlants[key];
	// }

	const parsedPlants = Object.values(listOfPlants).map((plant) => (
		<PlantListItem key={plant.id} {...plant} />
	));
	const onePlant = listOfPlants.a;
	return (
		<main>
			{/* {[1, 2, 3, 4, 5, 6]} */}
			{parsedPlants}
			{/* <PlantListItem plantData={onePlant} /> */}
			{/* <PlantListItem
				{...onePlant} // <% %>
			/>
			<PlantListItem
				name={onePlant.name}
				lastWatered={onePlant.lastWatered}
				wateringInterval={onePlant.wateringInterval}
			/> */}
		</main>
	);
}
