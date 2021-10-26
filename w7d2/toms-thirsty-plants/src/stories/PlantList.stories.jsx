import PlantList from "../components/PlantList";
import { storiesOf } from "@storybook/react";

const good = {
	id: "a",
	lastWatered: "2021-10-26",
	name: "Money Tree",
	wateringInterval: 2,
};

const bad = {
	id: "a",
	lastWatered: "2021-10-20",
	name: "Money Tree",
	wateringInterval: 2,
};

storiesOf("PlantList Item", module)
	.add("Well watered plant", () => <PlantListItem {...good} />)
	.add("Badly watered plant", () => <PlantListItem {...bad} />);
