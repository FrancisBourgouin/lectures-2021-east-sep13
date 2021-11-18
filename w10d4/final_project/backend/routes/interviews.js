const express = require("express");
const interviews = express.Router();

// Access all interviews
interviews.get("/", function (req, res, next) {
	res.json({});
});
interviews.get("/:interview_id", function (req, res, next) {
	res.json({});
});
interviews.get("/:interview_id/questions", function (req, res, next) {
	res.json({});
});
interviews.get(
	"/:interview_id/questions/:question_id",
	function (req, res, next) {
		res.json({});
	}
);

module.exports = interviews;
