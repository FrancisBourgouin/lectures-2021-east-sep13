import PlantList from "../components/PlantListItem";

import { storiesOf } from "@storybook/react";

const plant4 = {
	id: "d",
	lastWatered: "2021-10-26",
	name: "Pothos",
	wateringInterval: 200,
};

const plantList = { d: plant4 };
const emptyPlantList = {};

storiesOf("PlantList", module)
	.add("With a list", () => <PlantList {...plantList} />)
	.add("Without a list", () => <PlantList {...emptyPlantList} />);
