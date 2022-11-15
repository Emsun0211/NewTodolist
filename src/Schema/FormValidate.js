import * as yup from "yup";
const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const BasicSchema = yup.object().shape({
	name: yup.string().required("required"),
	email: yup.string().email("PLease enter a valid email"),
	age: yup.number().positive().integer().required("Required"),
	password: yup.string().min(6).matches(reg, {
		message:
			"Password must contain at least 8 charact, one uppercase, one lowercase, a number and a symbol",
	}),
	cpassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Password must match"),
});
