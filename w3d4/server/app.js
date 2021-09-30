require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const logger = require("morgan");
const { authenticateUser } = require("./helpers/userHelpers");
const { protectRoutes } = require("./helpers/authHelpers");

const app = express();

// view engine setup
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(
	cookieSession({
		name: "session",
		keys: ["Some way to encrypt the values", "$!~`yEs123bla!!%"],
		// 52**31
		// 100**12
	})
);
console.log(process.env.SECRET_MESSAGE);
app.use(protectRoutes);

const hashedPassword1 = bcrypt.hashSync("hydrogen", salt);
const hashedPassword2 = bcrypt.hashSync("electricity", salt);

const user = {
	name: "Dimitri Ivanovich Mendeleiv",
	email: "periodic@table.com",
	password: hashedPassword1,
	secret: "Actually prefers biology",
};

const user2 = {
	name: "Nikola Tesla",
	email: "ac@betterthandc.com",
	password: hashedPassword2,
	secret: "Prefers a wired internet connection to a wireless one.",
};

const userDatabaseIsh = {
	"periodic@table.com": user,
	"ac@betterthandc.com": user2,
};

console.log(salt, userDatabaseIsh);

// userDatabaseIsh[email]

// const userDatabaseIshArray = [
// 	user
// ]
// for(const user of userDatabaseIshArray){
// 	if(user.email === email){
// 		...
// 	}
// }
// userDatabaseIshArray.find(user => user.email === email)

app.get("/", (req, res) => {
	res.render("index");
});

app.post("/login", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	// const {email, password} = req.body

	const result = authenticateUser(userDatabaseIsh, email, password);
	console.log(result);

	if (result.error) {
		console.log(result.error);
		return res.redirect("/");
	}

	// res.cookie("email", email);
	req.session.email = email;
	console.log(req.session);

	return res.redirect("/vault");
});

app.post("/register", (req, res) => {
	const newUser = {
		name: req.body.name,
		email: req.body.email,
		secret: req.body.secret,
		password: bcrypt.hashSync(req.body.password, salt),
	};

	userDatabaseIsh[req.body.email] = newUser;
	req.session.email = req.body.email;
	res.redirect("/vault");
});

app.get("/vault", (req, res) => {
	const email = req.session.email;

	// if (!email) {
	// 	return res.redirect("/");
	// }

	const templateVars = {
		name: userDatabaseIsh[email].name,
		secret: userDatabaseIsh[email].secret,
	};
	res.render("vault", templateVars);
});

app.get("/users", (req, res) => {
	res.json(userDatabaseIsh);
});

module.exports = app;
