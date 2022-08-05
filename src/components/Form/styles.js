import styled from "styled-components";
import { Link } from "react-router-dom";
import { v } from "../../styles/variables";
import { btnReset } from "../../styles/variables";

export const StyledIcon = styled.div`
	border: 1px solid #000; 
	background: pink;
   width: 55px;
   height:55px;
   border-radius:50px;
	margin:0 auto;
	position: relative;
	margin-bottom:${v.smSpacing};
	& > img{
		width:30px;
		height:30px;
		position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
		
	}
`;

export const StyledForm = styled.form`
	width:100%;
	/* background:${({ theme }) => theme.bg2}; */
	border-radius:${v.borderRadius};
	padding:${v.mdSpacing};
	display:flex;
	flex-direction:column;
	
`;


export const StyledFormTitle = styled.span`
	font-size:24px;
	font-weight:600;
	text-align:center;
	margin-bottom:${v.mdSpacing};
`;

export const StyledFormControl = styled.div`
	:first-of-type{
		margin-top:${v.mdSpacing};
	}
	:not(:last-of-type){
		margin-bottom:${v.mdSpacing};
	}
`;



export const StyledInput = styled.input`
	outline:none;
	border: 1px solid ${({ theme }) => theme.textFade};
   width:100%;
	padding:14px;
	border-radius:${v.borderRadius};
	display:flex;
   
`;

export const StyledCheckbox = styled.div`
	display:flex;
`;

export const Checkbox = styled.input`
	margin-right: ${v.smSpacing};

`;
export const CheckboxLabel = styled.span`
   font-size:14px;
`;

export const StyledButton = styled.button`
	${btnReset};
   width: 100%;
   background: ${({ theme }) => theme.bgSecondary};
   color: ${({ theme }) => theme.textSecondary};
   padding: ${v.smSpacing};
   display: flex;
   justify-content: center;
   border-radius: ${v.borderRadius};
   margin: ${v.mdSpacing} 0;
   cursor: pointer;

`;

export const SRedirectContainer = styled.div`
   display:flex;
	justify-content:space-between;
	align-items:center;
	margin-bottom:${v.xlSpacing};

	& > span{
		font-size:12px;
		display:inline-block;
		white-space: nowrap;
		color: ${({ theme }) => theme.primary};
	}
`;

export const StyledRedirect = styled.div`
   font-size: 12px;
   width: 100%;
   display: flex;
   justify-content: flex-end;
`;
export const StyledRedirectLabel = styled.span`
   color: ${({ theme }) => theme.primary};
`;

export const StyledRedirectLink = styled(Link)`
   color: ${({ theme }) => theme.primary};
	text-decoration:none;
`;

export const StyledFooter = styled.div`
   display:flex;
	justify-content:center;
	margin-bottom:${v.lgSpacing};
	font-size:12px;
	color:${({ theme }) => theme.b2}
`;
