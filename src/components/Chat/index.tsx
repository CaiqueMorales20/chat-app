// Imports
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, collectionMessages } from "../../firebase/configs";
import { orderBy, query } from "firebase/firestore";
import { Message } from "../Message";

// Functional Component
export const Chat = () => {
	// Variables
	const messagesRef = query(collectionMessages, orderBy("createdAt"));
	const [messages] = useCollectionData(messagesRef, {
		snapshotListenOptions: {
			includeMetadataChanges: true,
		},
		snapshotOptions: {},
	});

	// Rendering
	return (
		<>
			{messages &&
				messages.map((item, index) => {
					return (
						<Message
							text={item.text}
							uid={auth.currentUser?.uid}
							key={index}
							photoURL={item.photoURL}
						/>
					);
				})}
		</>
	);
};
