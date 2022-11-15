import React from "react";
import { Formik } from "formik";
import { BasicSchema } from "../Schema/FormValidate";

export const NewForm = () => {
	console.log(BasicSchema);
	return (
		<>
			<div className='login-container'>
				<h3>Login In</h3>
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={BasicSchema}
					onSubmit={(values) => {
						console.log("submited");
					}}>
					{({
						values,
						errors,
						handleChange,
						handleSubmit,
						handleBlur,
						touched,
						isSubmitting,
					}) => (
						<form onSubmit={handleSubmit}>
							<div className='input-container'>
								<label htmlFor='email'>Email</label>
								<input
									type={"email"}
									name='email'
									onChange={handleChange}
									onBlur={handleBlur}
									values={values.email}
									className={errors.email ? "input-error" : ""}
								/>
							</div>

							<div className='input-container'>
								<label htmlFor='password'>Password</label>
								<input
									type={"password"}
									name='password'
									onChange={handleChange}
									onBlur={handleBlur}
									values={values.password}
									className={errors.password ? "input-error" : ""}
								/>
							</div>

							<button type='submit'>Submit</button>
						</form>
					)}
				</Formik>
			</div>
		</>
	);
};
