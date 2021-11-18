const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const interviewsRouter = require("./routes/interviews");
const interviewersRouter = require("./routes/interviewers");
const candidatesRouter = require("./routes/candidates");
const questionsRouter = require("./routes/questions");

app.use("/api/interviews", interviewsRouter);
app.use("/api/interviewers", interviewersRouter);
app.use("/api/candidates", candidatesRouter);
app.use("/api/questions", questionsRouter);

app.get("/api/authenticate");
app.post("/api/login");
app.post("/api/register");
module.exports = app;
