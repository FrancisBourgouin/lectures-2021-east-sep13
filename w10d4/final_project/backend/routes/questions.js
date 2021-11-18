const express = require("express");
const questions = express.Router();

// Access all questions
questions.get("/", function (req, res, next) {
	res.json({});
});
questions.get("/:question_id", function (req, res, next) {
	res.json({});
});

module.exports = questions;
