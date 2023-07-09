// Imports
import { styled } from "styled-components";

// Styled Components
export const AppS = styled.div`
	padding-top: 10rem;
	width: min(60rem, 90%);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	margin-inline: auto;
	align-items: center;
	justify-content: center;
	gap: 4rem;
`;

export const ButtonArea = styled.div`
	display: flex;
	gap: 0.5em;
	width: 50%;
	margin-inline: auto;
`;

export const ButtonS = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1em 2em;
	background-color: #fefefe;
	border-radius: 10px;
	cursor: pointer;
	width: 100%;
`;

export const InputContainer = styled.div`
	display: flex;
	width: min(40rem, 90%);
	height: 2rem;
`;

export const InputS = styled.input`
	flex-basis: 100%;
	padding: 0.5em;
`;

export const Image = styled.img`
	width: auto;
	height: 100%;
`;
