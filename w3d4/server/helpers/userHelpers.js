const bcrypt = require("bcryptjs");

const authenticateUser = (userDB, email, password) => {
	if (userDB[email]) {
		// if (userDB[email].password === password) {
		if (bcrypt.compareSync(password, userDB[email].password)) {
			// Email & password match
			return { user: userDB[email], error: null };
		}
		// Bad password
		return { user: null, error: "bad password" };
	}
	// Bad email
	return { user: null, error: "bad email" };
};

module.exports = { authenticateUser };
