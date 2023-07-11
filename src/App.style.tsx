// Imports
import { styled } from "styled-components";

// Styled Components
export const AppS = styled.div`
	padding-block: 1.5em;
	height: 100vh;
	display: flex;
	flex-direction: column;
	margin-inline: auto;
	align-items: center;
	justify-content: center;
	width: min(60rem, 90vw);
	gap: 2rem;
`;

export const ChatTitle = styled.h1`
	font-size: 2.5rem;
	color: #ffffff;
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
	font-size: 0.8rem;
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

export const ImageContainer = styled.div`
	width: 2.5rem;
	height: 1rem;
	display: flex;
	justify-content: center;
	height: 100%;
	background: #6985fc;
	align-items: center;
`;

export const Image = styled.img`
	width: 1.25rem;
	height: 1.25rem;
`;

export const ButtonImage = styled.img`
	width: 2rem;
`;
