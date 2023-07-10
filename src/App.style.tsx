// Imports
import { styled } from "styled-components";

// Styled Components
export const AppS = styled.div`
	padding-block: 4em;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	margin-inline: auto;
	align-items: center;
	width: min(40rem, 90vw);
	gap: 4rem;
`;

export const ButtonArea = styled.div`
	display: flex;
	gap: 0.5em;
	margin-inline: auto;
`;

export const ButtonS = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1em 2em;
	background-color: #6985fc;
	color: #ffffff;
	border-radius: 10px;
	cursor: pointer;
	gap: 0.5rem;
	width: 100%;
`;

export const InputContainer = styled.div`
	width: 100%;
	height: 2.5rem;
	display: flex;
	justify-content: space-between;
	gap: 0.5em;
`;

export const InputS = styled.input`
	padding: 1em 2em;
	background-color: #303247;
	border-radius: 0.5em;
	width: 100%;
	color: #ffffff;
`;

export const SendBtn = styled.button`
	border-radius: 0.5em;
	overflow: hidden;
	cursor: pointer;
`;

export const Image = styled.img`
	object-fit: cover;
	height: 100%;
`;

export const ButtonImage = styled.img`
	width: 2rem;
`;
