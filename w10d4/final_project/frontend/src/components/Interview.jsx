import CandidateList from "./CandidateList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Interview(props) {
	const [candidates, setCandidates] = useState(null);

	useEffect(() => {
		axios.get("/api/candidates").then((res) => setCandidates(res.data));
	}, []);
	return (
		<div>
			<h1>I am Interview</h1>
			<CandidateList candidates={candidates} />
		</div>
	);
}
