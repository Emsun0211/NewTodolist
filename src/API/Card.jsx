import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import style from "./Card.module.css";

export const Card = () => {
	const url = "https://jsonplaceholder.typicode.com/posts";
	// const axios = require("axios");
	const [posts, setposts] = useState(null);
	const fetchData = async () => {
		await axios.get(`${url}/1`).then((response) => {
			setposts(response.data);
		});
	};
	useEffect(() => {
		fetchData();
	}, []);

	function createPost() {
		axios
			.post(url, {
				title: "My first post",
				body: "This is my first post on any API call. So I think I am learning",
			})
			.then((response) => {
				setposts(response.data);
			});
	}

	if (!posts) return null;
	return (
		<div className={style.container}>
			<h1>Profile Details</h1>

			<div className={style.card_container}>
				<h4>{posts.title}</h4>
				<p>{posts.body}</p>
				<button onClick={createPost}>Create Post</button>
			</div>
		</div>
	);
};
