// Imports
import { styled } from "styled-components";

// Types
type MessageProps = {
	user: boolean;
};

// Styled Components
export const MessageS = styled.div<MessageProps>`
	border-radius: 0.5em;
	display: flex;
	width: 100%;
	align-items: flex-end;
	justify-self: flex-start;
	gap: 0.4rem;
	flex-direction: ${(props) => props.user && "row-reverse"};
`;

export const TextContainer = styled.div`
	background-color: #6884ff;
	padding: 1em;
	border-radius: 0.5em 0.5em 0em 0.5em;
`;

export const Text = styled.p`
	color: #fefefe;
`;

export const Image = styled.img`
	width: 1.5rem;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
`;
