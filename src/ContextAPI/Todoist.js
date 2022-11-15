import React, { useContext, useState } from "react";
import { TodoContext } from "./helper/context/todo_context/TodoContext";
import "./Todoist.css";

export const Todoist = () => {
	console.log(process.env.REACT_APP_BASE_URL);
	const {
		todos,
		addTodo,
		deleteTodo,
		toggleComplete,
		isAuthenticated,
		login,
		updateTodo,
	} = useContext(TodoContext);
	const [title, settitle] = useState("");
	const [isEditMode, setisEditMode] = useState(false);
	const [todoToEdit, settodoToEdit] = useState({});

	const handleSubmit = () => {
		const newTodo = {
			id: crypto.randomUUID(),
			title: title,
			isCompleted: false,
		};
		addTodo(newTodo);
		settitle("");
	};

	const handleEditTodo = (todoObj) => {
		setisEditMode(true);
		settodoToEdit(todoObj);
		settitle(todoObj.title);
	};

	const handleUpdateTodo = () => {
		const newTodoObject = { id: todoToEdit.id, title: title };
		updateTodo(newTodoObject);
		settitle("");
		setisEditMode(false);
	};

	return (
		<div className='Todoist-container'>
			{isAuthenticated ? (
				<>
					{!isEditMode ? (
						<section className='input-container'>
							<input
								type={"text"}
								value={title}
								className='Todoist-input'
								onChange={(e) => settitle(e.target.value)}
							/>
							<button className='add-btn' onClick={handleSubmit}>
								Add
							</button>
						</section>
					) : (
						<section className='input-container'>
							<input
								type={"text"}
								value={title}
								className='Todoist-input'
								onChange={(e) => settitle(e.target.value)}
							/>
							<button className='add-btn' onClick={handleUpdateTodo}>
								Update
							</button>
						</section>
					)}
					<section>
						<ul>
							{todos.map((todo) => {
								const { isCompleted, id, title } = todo;
								return (
									<li
										className={`todoist-li ${isCompleted ? "completed" : null}`}
										key={id}>
										{title}
										<span onClick={() => toggleComplete(id)}>
											{isCompleted ? "❌" : "✅"}
										</span>
										<span onClick={() => handleEditTodo(todo)}>✍️</span>
										<span onClick={() => deleteTodo(id)}>🗑</span>
									</li>
								);
							})}
						</ul>
					</section>
				</>
			) : (
				<>
					<div className='w-full flex flex-col items-center'>
						<h2 className='p-4 text-center text-3xl'>Login</h2>
						<button
							className='bg-blue-600 p-1 mb-4 rounded text-white'
							onClick={() => login()}>
							Login
						</button>
					</div>
				</>
			)}
		</div>
	);
};
