const { Pool } = require("pg");

const pool = new Pool({
	user: "labber",
	password: "labber",
	host: "localhost",
	database: "badjokes",
	port: 5432,
});

const valuesFromCLI = process.argv.slice(2);

const question = valuesFromCLI[0];
const answer = valuesFromCLI[1];
const rating = valuesFromCLI[2];
const author_id = valuesFromCLI[3];

const sqlQuery = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
`;

pool
	.query(sqlQuery, [question, answer, rating, author_id])
	.then((dbRes) => console.log(dbRes.rows))
	.catch((err) => console.log(err))
	.finally(() => pool.end());
