import ListItem from "./ListItem";

export default function List(props) {
	const { items, removeItem } = props;

	// const output = []
	// for(const item of items){
	//   output.push(<ListItem name={item} />)
	// }

	const output = items.map((item) => (
		<ListItem name={item} removeItem={() => removeItem(item)} />
	));
	return (
		<div>
			<h1>LIST</h1>
			{output}
		</div>
	);
}
