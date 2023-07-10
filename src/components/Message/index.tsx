// Imports
import { auth } from "../../firebase/configs";

// Styled Components
import { Image, MessageS, Text, TextContainer } from "./style";

// Types
import { MessageProps } from "./types";

// Functional Component
export const Message = (props: MessageProps) => {
	// Rendering
	return (
		<MessageS user={props.uid === auth.currentUser?.uid ? true : false}>
			<Image src={props.photoURL ? props.photoURL : ""} />
			<TextContainer user={props.uid === auth.currentUser?.uid ? true : false}>
				<Text>{props.text}</Text>
			</TextContainer>
		</MessageS>
	);
};
