export default function ListItem(props) {
	const { name, removeItem } = props;
	return (
		<div>
			<h1>List item!</h1>
			<p>Name: {name}</p>
			<button onClick={removeItem}>REMOVE ME</button>
		</div>
	);
}
