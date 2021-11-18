import CandidateListItem from "./CandidateListItem";

export default function CandidateList(props) {
	// const candidates = [
	// 	{ name: "Pollo", email: "pol@lo.com" },
	// 	{ name: "Chicken", email: "chicken@lo.com" },
	// ];

	const { candidates } = props;

	const parsedCandidates =
		Array.isArray(candidates) &&
		candidates.map((candidate) => (
			<CandidateListItem {...candidate} key={candidate.id} />
		));
	return (
		<div>
			<h1>I am CandidateList</h1>
			<section>{parsedCandidates}</section>
		</div>
	);
}
