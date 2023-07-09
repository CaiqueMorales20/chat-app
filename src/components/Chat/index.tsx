// Imports
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, collectionMessages } from "../../firebase/configs";
import { orderBy, query } from "firebase/firestore";

// Imported Components
import { Message } from "../Message";

// Styled Components
import { ChatS } from "./style";

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
			{messages &&
				messages.map((item, index) => {
					return (
						<Message
							text={item.text}
							uid={auth.currentUser?.uid}
							key={index}
							photoURL={item.photoURL}
							messageId={item.messageId}
						/>
					);
				})}
		</ChatS>
	);
};
