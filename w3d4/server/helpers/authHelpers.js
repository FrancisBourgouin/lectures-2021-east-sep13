const protectRoutes = (req, res, next) => {
	const email = req.session.email;
	const path = req.path;
	const allowedPaths = ["/", "/login"];

	if (allowedPaths.includes(path)) {
		return next();
	}
	if (!email) {
		return res.redirect("/");
	}

	next();
};

const protectRoutes2 = (req, res, next) => {
	const email = req.session.email;
	const path = req.path;
	const allowedPaths = ["/", "/login"];

	if (allowedPaths.includes(path)) {
		return next();
	}
	if (!email) {
		return res.redirect("/");
	}

	next();
};

module.exports = { protectRoutes, protectRoutes2 };
