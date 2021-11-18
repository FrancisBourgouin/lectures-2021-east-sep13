const express = require("express");
const candidates = express.Router();

// Access all candidates
candidates.get("/", function (req, res, next) {
	const candidates = [
		{ name: "Pollo", email: "pol@lo.com" },
		{ name: "Chicken", email: "chicken@lo.com" },
	];

	res.json(candidates);
});
candidates.get("/:candidate_email", function (req, res, next) {
	const candidate = { name: "Pollo", email: "pol@lo.com" };

	res.json({});
});

module.exports = candidates;
