// import { useFormik } from "formik";
// import React from "react";
// // import { useState } from "react";
// import { BasicSchema } from "../Schema/FormValidate";
// import "./Form.css";

// export const Form = () => {
// 	const onSubmit = () => {
// 		console.log("submitted");
// 	};
// 	const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
// 		useFormik({
// 			initialValues: {
// 				name: "",
// 				email: "",
// 				age: "",
// 				password: "",
// 				cpassword: "",
// 			},
// 			validationSchema: BasicSchema,
// 			onSubmit,
// 		});
// 	console.log(errors);

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<div className='input-container'>
// 				<label htmlFor='Name'>Name</label>
// 				<input
// 					value={values.name}
// 					onChange={handleChange}
// 					id='name'
// 					type='text'
// 					name='name'
// 					placeholder='Enter your name'
// 					className={errors.name ? "input-error" : ""}
// 				/>
// 				{errors.name && <p className='errors'>{errors.name}</p>}
// 			</div>
// 			<div className='input-container'>
// 				<label htmlFor='email'>Email</label>
// 				<input
// 					value={values.email}
// 					onChange={handleChange}
// 					id='email'
// 					type='text'
// 					name='email'
// 					placeholder='Enter your name'
// 					className={errors.email ? "input-error" : ""}
// 				/>
// 				{errors.email && <p className='errors'>{errors.email}</p>}
// 			</div>
// 			<div className='input-container'>
// 				<label htmlFor='age'>Age</label>
// 				<input
// 					value={values.age}
// 					onChange={handleChange}
// 					id='age'
// 					type='number'
// 					name='age'
// 					placeholder='Enter your age'
// 					className={errors.age ? "input-error" : ""}
// 				/>
// 				{errors.age && <p className='errors'>{errors.age}</p>}
// 			</div>

// 			<div className='input-container'>
// 				<label htmlFor='email'>Password</label>
// 				<input
// 					value={values.password}
// 					onChange={handleChange}
// 					id='password'
// 					type='password'
// 					name='password'
// 					placeholder='Enter your Password'
// 					className={errors.password ? "input-error" : ""}
// 				/>
// 				{errors.password && <p className='errors'>{errors.password}</p>}
// 			</div>
// 			<div className='input-container'>
// 				<label htmlFor='email'>Confirm Password</label>
// 				<input
// 					value={values.cpassword}
// 					onChange={handleChange}
// 					id='cpassword'
// 					type='password'
// 					name='cpassword'
// 					placeholder='Enter your name'
// 					className={errors.cpassword ? "input-error" : ""}
// 				/>
// 				{errors.cpassword && <p className='errors'>{errors.cpassword}</p>}
// 			</div>
// 			<button type='submit'>Submit</button>
// 		</form>
// 	);
// };

import React from "react";
import { Formik, Form, Field } from "formik";

export const RegistrationForm = () => {
	return (
		<>
			<div className='w-full justify-center'>
				<h1>Sign Up</h1>
				<Formik
					initialValues={{
						firtsName: "",
						lastName: "",
						email: "",
					}}>
					{({ errors, touched }) => (
						<Form>
							<Field name='firstName' />
							<Field name='lastName' />
							<Field name='email' type='email' />
							<button type='submit'>Submit</button>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};
