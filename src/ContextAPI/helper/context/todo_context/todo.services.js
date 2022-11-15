import axiosInstance from "../../axios-config/axios-todo-config";

const getTodos = async () => {
	try {
		const res = await axiosInstance.get("/todos");
		console.log(res);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const TodoService = {
	getTodos,
};

export default TodoService;
