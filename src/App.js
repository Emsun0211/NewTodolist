import React from "react";
import { Todoist } from "./ContextAPI/Todoist";
import { Routes, Route } from "react-router-dom";
import { TodoDetail } from "./ContextAPI/Tododetails";
// import { Form } from "./Form/Form";
// import { RegistrationForm } from "./Form/RegistrationForm";
// import Contact from "./Contact";

function App() {
	console.log(process.env.REACT_APP_BASE_URL);
	return (
		<Routes>
			<Route index element={<Todoist />} />
			<Route path=':todo_id' element={<TodoDetail />} />
		</Routes>
	);
}

export default App;
