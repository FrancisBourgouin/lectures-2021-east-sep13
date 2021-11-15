import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header>
					<nav>
						<Link to="/bob">Bob page</Link>
						<Link to="/robert">Robert page</Link>
					</nav>
				</header>

				<Routes>
					<Route path="/bob" element={<PostList />} />
					<Route path="/robert" element={<h1>I AM ROBERT</h1>} />
				</Routes>
				<footer>I am footer!</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
