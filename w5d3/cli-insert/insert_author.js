const { Pool } = require("pg");

const pool = new Pool({
	user: "labber",
	password: "labber",
	host: "localhost",
	database: "badjokes",
	port: 5432,
});

const valuesFromCLI = process.argv.slice(2);

const name = valuesFromCLI[0];
const isFunny = valuesFromCLI[1] === "true";
const description = valuesFromCLI[2];

const sqlQuery = `
INSERT
INTO authors (name, funny, description)
VALUES ($1, $2, $3)
RETURNING *
`;

pool
	.query(sqlQuery, [name, isFunny, description])
	.then((dbRes) => console.log(dbRes.rows))
	.catch((err) => console.log(err))
	.finally(() => pool.end());
