SELECT 
  jokes.question AS question,
  jokes.answer AS answer,
  authors.name AS author_name,
  authors.description AS author_description  
  FROM jokes
  JOIN authors
  ON authors.id = jokes.author_id

;