import React from "react";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";


const Register = () => {
	const onSubmitHandler = (form, callback) => {
		console.log("Register Submitted:", form);
		callback();
	};

	return (
		<SFixedContainer size={400}>
			<Form
				title={"Sign Up"}
				formArr={formArr}
				checkboxLabel={"I want to receive inspiration, marketing promotions and updates via email."}
				submitBtn={"Sign Up"}
				onSubmit={onSubmitHandler}
				redirect={{
					label: "Already have an account?",
					link: {
						label: "Sign In",
						to: "/",
					},
				}}
			/>
		</SFixedContainer >
	);
};

const formArr = [
	{
		name: "Firs Name*",
		type: "text",

	},
	{
		name: "Last Name*",
		type: "text",
	},
	{
		name: "Email Address*",
		type: "text",
	},

	{
		name: "Password*",
		type: "password",
	},
];

export default Register;