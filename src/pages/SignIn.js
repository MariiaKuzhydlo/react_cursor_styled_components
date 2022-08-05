import React from "react";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";


const SignIn = () => {
	const onSubmitHandler = (form, callback) => {
		console.log("Sign In submitted: ", form);
		callback();
	};

	return (
		<SFixedContainer size={400}>
			<Form
				title={"Sign In"}
				formArr={formArr}
				submitBtn={"Sign In"}
				checkboxLabel={"Remember me"}
				onSubmit={onSubmitHandler}
				text={"Forgot password?"}
				redirect={{
					label: "Don't have an account?",
					link: {
						label: "Sign Up",
						to: "/register",
					},
				}}
			/>
		</SFixedContainer>
	);
};

const formArr = [
	{
		name: "Email Address*",
		type: "text",
	},

	{
		name: "Password*",
		type: "password",
	},

];

export default SignIn;