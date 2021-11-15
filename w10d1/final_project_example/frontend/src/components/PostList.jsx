import PostListItem from "./PostListItem";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PostList(props) {
	const [posts, setPosts] = useState(null);
	useEffect(() => {
		axios.get("/api/posts").then((res) => setPosts(res.data));
	}, []);

	// const posts = [
	// 	{
	// 		id: 1,
	// 		title: "It's a post",
	// 		description: "Secret",
	// 		content: "MWAHAHAHAHAHA",
	// 		created_at: "2021-11-15T18:00:01.675Z",
	// 		updated_at: "2021-11-15T18:00:01.675Z",
	// 		url: "http://localhost:3000/api/posts/1.json",
	// 	},
	// ];

	const parsedPosts = posts && posts.map((post) => <PostListItem {...post} />);

	return <div>{parsedPosts}</div>;
}
