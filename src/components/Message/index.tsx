// Styled Components
import { Image, MessageS, Text } from "./style";

// Types
import { MessageProps } from "./types";

// Functional Component
export const Message = (props: MessageProps) => {
	// Rendering
	return (
		<MessageS>
			<Image src={props.photoURL ? props.photoURL : ""} />
			<Text>{props.text}</Text>
		</MessageS>
	);
};
