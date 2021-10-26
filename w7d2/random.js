fs.writeFile("./bob.txt", { encoding: "utf8" }, data);

$.ajax({ method: "POST", url: "/" });

const plant4 = {
	id: "d",
	lastWatered: "2021-10-26",
	name: "Pothos",
	wateringInterval: 200,
};

const newPlant = {
	id: plant4.id,
	name: plant4.name,
};

const coolNewPlant = { ...plant4 };
