import React, { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import { TodoContext } from "./TodoContext";
import {
	ADD_TODO,
	DELETE_TODO,
	LOGIN_USER,
	TOGGLE_COMPLETE,
	UPDATE_TODO,
	FIND_TODO_BY_ID,
	LOAD_TODOS,
} from "./Todotype";

export const TodoState = ({ children }) => {
	const initialState = {
		todos: [],
		isAuthenticated: false,
		todo: {},
	};

	const [state, dispatch] = useReducer(TodoReducer, initialState);

	const login = () => {
		dispatch({ type: LOGIN_USER });
	};

	const loadTodos = (arrayOfTodos) => {
		dispatch({ type: LOAD_TODOS, payload: arrayOfTodos });
	};

	const addTodo = (todoObj) => {
		dispatch({ type: ADD_TODO, payload: todoObj });
	};

	const deleteTodo = (todoId) => {
		dispatch({ type: DELETE_TODO, payload: todoId });
	};

	const toggleComplete = (todoId) => {
		dispatch({ type: TOGGLE_COMPLETE, payload: todoId });
	};

	const updateTodo = (newTodoObject) => {
		dispatch({ type: UPDATE_TODO, payload: newTodoObject });
	};

	const findTodoById = (todoId) => {
		dispatch({ type: FIND_TODO_BY_ID, payload: todoId });
	};
	return (
		<TodoContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				todos: state.todos,
				login,
				loadTodos,
				addTodo,
				deleteTodo,
				toggleComplete,
				updateTodo,
				findTodoById,
				...state,
			}}>
			{children}
		</TodoContext.Provider>
	);
};
