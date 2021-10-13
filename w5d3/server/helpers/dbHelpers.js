const initializeDBHelpers = (pool) => {
	const insertJokeInDB = (valuesObject) => {
		const { question, answer, rating, author_id } = valuesObject;
		const sqlQuery = `
    INSERT INTO
      jokes (question, answer, rating, author_id)
    VALUES
      ($1, $2, $3, $4)
    RETURNING *
  `;
		return pool.query(sqlQuery, [question, answer, rating, author_id]);
	};

	const getAllJokes = () => {
		const sqlQuery = `
      SELECT 
      jokes.question AS question,
      jokes.answer AS answer,
      authors.name AS author_name,
      authors.description AS author_description  
      FROM jokes
      JOIN authors
      ON authors.id = jokes.author_id
    `;
		return pool.query(sqlQuery);
	};

	const getAllAuthors = () => {
		const authors = [{ name: "" }];
		return authors;
	};

	return { getAllJokes, insertJokeInDB, getAllAuthors };
};

module.exports = initializeDBHelpers;
