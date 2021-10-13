const { Pool } = require("pg");

const pool = new Pool({
	user: "labber",
	password: "labber",
	host: "localhost",
	database: "badjokes",
	port: 5432,
});

// pool.query("SELECT * FROM jokes", (err, res) => {
// 	console.log(err, res);
// 	pool.end();
// });

// pool
// 	.query("SELECT * FROM jokes")
// 	.then((dbRes) => console.log(dbRes))
// 	.catch((err) => console.log(err))
// 	.finally(() => pool.end());

// {
//   question: 'Why do programmers mix hallowen and christmas',
//   answer: 'because OCT 31 === DEC 25',
//   author_name: 'Francis',
//   author_description: 'Oh boy, he is a teacher'
// }
const parseJoke = (jokeObject) => {
	console.log("*******************************");
	console.log(`The joke is: ${jokeObject.question}`);
	console.log(`The answer is: ${jokeObject.answer}`);
	console.log(`Provided by: ${jokeObject.author_name}`);
	console.log("******************************* \n \n");
};

const parseAllJokes = (jokeArray) => {
	for (const joke of jokeArray) {
		parseJoke(joke);
	}
};

const limit = process.argv[2] || 5;
// const limit = Math.floor(Math.random() * 5);

const sqlQuery = `
SELECT 
jokes.question AS question,
jokes.answer AS answer,
authors.name AS author_name,
authors.description AS author_description  
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
LIMIT $1
`;

pool
	.query(sqlQuery, [limit])
	.then((dbRes) => parseAllJokes(dbRes.rows))
	.catch((err) => console.log(err))
	.finally(() => pool.end());
