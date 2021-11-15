export default function PostListItem(props) {
	const { title, content } = props;
	return (
		<div>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	);
}
