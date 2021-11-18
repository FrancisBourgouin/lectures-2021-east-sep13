const express = require("express");
const interviewers = express.Router();

// Access all interviewers
interviewers.get("/", function (req, res, next) {
	res.json({});
});
interviewers.get("/:interviewer_id", function (req, res, next) {
	res.json({});
});

module.exports = interviewers;
