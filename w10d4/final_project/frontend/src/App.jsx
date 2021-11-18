import logo from "./logo.svg";
import "./App.css";
import Interview from "./components/Interview";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	const login = (userId) => {
		axios
			.post("/api/login", { userId })
			.then((res) => setCurrentUser(res.data));
	};

	return (
		<BrowserRouter>
			<div className="App">
				<h1>Super interview thingy!</h1>
				<header>
					<nav>
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/interview">Interview</Link>
						{!currentUser && <Link to="/start">Login / Register</Link>}
					</nav>
				</header>
				{!currentUser && (
					<button onClick={() => setCurrentUser({ name: "bob" })}>
						LOG IN
					</button>
				)}
				{currentUser && <Interview />}

				<Routes>
					<Route path="/interview" element={<Interview />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
