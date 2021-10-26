# Water plant thingy

# Info

Show a list of tiles representing plants, with their name, and the last time they were watered.

# Data Structure

```jsx
interface somePlant {
	id: String;
	name: String;
	wateringInterval: Int;
	lastWatered: String;
}

interface listOfPlants {
	id: somePlant;
}
```

# Mock data

```jsx
const plant1 = {
	id: "a",
	lastWatered: "2021-10-26",
	name: "Money Tree",
	wateringInterval: 2,
};
const plant2 = {
	id: "b",
	lastWatered: "2021-10-26",
	name: "Ficus",
	wateringInterval: 11,
};
const plant3 = {
	id: "c",
	lastWatered: "2021-10-26",
	name: "Bamboo",
	wateringInterval: 6,
};
const plant4 = {
	id: "d",
	lastWatered: "2021-10-26",
	name: "Pothos",
	wateringInterval: 200,
};

const listOfPlants = {
	a: plant1,
	b: plant2,
	c: plant3,
	d: plant4,
};
```

# HTML Structure

- body
  - header
    - h1 : Thirsty Plants
  - main
    - article (multiple times)
      - h1 : name of plant
      - p : last watered
      - p : watering interval
      - p : next watering day (fancy)
      - button : water the plant
      - button : evidence removal

# React Components

- App
  - PlantList
    - PlantListItem
