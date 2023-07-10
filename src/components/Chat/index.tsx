// Imports
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collectionMessages } from "../../firebase/configs";
import { orderBy, query } from "firebase/firestore";

// Imported Components
import { Message } from "../Message";

// Styled Components
import { ChatS, ChatTitle } from "./style";

// Functional Component
export const Chat = () => {
	// Variables
	const messagesRef = query(collectionMessages, orderBy("createdAt"));

	// Fetch Data
	const [messages] = useCollectionData(messagesRef, {
		snapshotListenOptions: {
			includeMetadataChanges: true,
		},
		snapshotOptions: {},
	});

	// Rendering
	return (
		<ChatS>
			<ChatTitle>Conversa</ChatTitle>
			{messages &&
				messages.map((item, index) => {
					return (
						<Message
							text={item.text}
							name={item.name}
							uid={item.uid}
							key={index}
							photoURL={item.photoURL}
							messageId={item.messageId}
						/>
					);
				})}
		</ChatS>
	);
};
