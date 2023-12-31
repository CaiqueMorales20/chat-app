// Imports
import { styled } from "styled-components";

// Styled Components
export const ChatS = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	min-height: 40vh;
	width: 100%;
	overflow: auto;
	margin-inline: auto;
	padding-right: 1em;

	&::-webkit-scrollbar {
		width: 0.7rem;
		background-color: #303247;
		border-radius: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #434664;
		border-radius: 0.5rem;
	}

	@media screen and (min-width: 768px) {
		height: 65vh;
	}
`;
