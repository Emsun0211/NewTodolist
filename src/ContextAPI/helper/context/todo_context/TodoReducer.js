import {
	ADD_TODO,
	DELETE_TODO,
	LOGIN_USER,
	TOGGLE_COMPLETE,
	UPDATE_TODO,
	FIND_TODO_BY_ID,
	LOAD_TODOS,
} from "./Todotype";

export const TodoReducer = (state, action) => {
	// const {todos} = state;
	// const {payload} = action;
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				isAuthenticated: true,
			};

		case LOAD_TODOS:
			return {
				...state,
				todos: action.payload,
			};
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case TOGGLE_COMPLETE:
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.payload) {
						const updatedTodo = {
							...todo,
							isCompleted: !todo.isCompleted,
						};
						return updatedTodo;
					} else return todo;
				}),
			};

		case UPDATE_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, title: action.payload.title }
						: todo
				),
			};

		case FIND_TODO_BY_ID:
			return {
				...state,
				todo: state.todos.find((todo) => todo.id === action.payload), // return: obj
			};

		default:
			return state;
	}
};
