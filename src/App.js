import React from "react";
import { Todoist } from "./ContextAPI/Todoist";
// import { Form } from "./Form/Form";
// import { RegistrationForm } from "./Form/RegistrationForm";
// import Contact from "./Contact";

function App() {
	console.log(process.env.REACT_APP_BASE_URL);
	return <Todoist />;
}

export default App;
