import React, { useState, useMemo } from 'react'
import {
	Checkbox,
	CheckboxLabel,
	SRedirectContainer,
	StyledButton,
	StyledCheckbox,
	StyledFooter,
	StyledForm,
	StyledFormControl,
	StyledFormTitle,
	StyledIcon,
	StyledInput,
	StyledRedirect,
	StyledRedirectLabel,
	StyledRedirectLink
} from './styles'
import Icon from "../../icon/padlock.png"

const prepareForm = (formArr) => {
	return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, checkboxLabel, submitBtn, onSubmit, text, redirect }) => {
	const initialForm = useMemo(() => prepareForm(formArr, [formArr]));

	const [form, setForm] = useState(initialForm);

	const onSubmitHandler = () => onSubmit(form, () => setForm(initialForm));
	const onChangeHandler = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

	const hasRedirect = !!redirect;
	return (
		<StyledForm >
			<StyledIcon>
				<img src={Icon} alt="logo" />
			</StyledIcon>
			<StyledFormTitle>{title}</StyledFormTitle>
			{formArr.map(({ placeholder, name, type }, index) => (
				<StyledFormControl key={index}>
					<StyledInput
						id={name}
						placeholder={name}
						name={name}
						type={type}
						value={form[name]}
						onChange={(e) => onChangeHandler(e)} />
				</StyledFormControl>
			))}
			<StyledCheckbox>
				<Checkbox type="checkbox"></Checkbox>
				<CheckboxLabel>{checkboxLabel}</CheckboxLabel>
			</StyledCheckbox>
			<StyledButton
				onClick={(e) => {
					e.preventDefault();
					onSubmitHandler();
				}}
			>{submitBtn}
			</StyledButton>
			{hasRedirect && (
				<SRedirectContainer>
					<span>{text}</span>
					<StyledRedirect>
						<StyledRedirectLabel>{redirect.label}</StyledRedirectLabel>
						<StyledRedirectLink to={redirect.link.to}>{redirect.link.label}</StyledRedirectLink>
					</StyledRedirect>
				</SRedirectContainer>
			)}
			<StyledFooter>Copyright © Your Website 2022.</StyledFooter>
		</StyledForm>
	);
};

Form.defaultProps = {
	title: "Sign In",
	formArr: [
		{
			name: "Email Address",
			type: "text",
		},
		{
			name: "Password",
			type: "password",
		},
	],
	submitBtn: "Sign In",
	onSubmit: (form) => console.log(form),
	redirect: null,
};

export default Form;
