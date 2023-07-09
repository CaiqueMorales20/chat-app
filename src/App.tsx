// Imports
import { auth, collectionMessages, db } from "./firebase/configs";
import {
	doc,
	limit,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";
import { signInWithGoogle, signOut } from "./firebase/functions";
import { useState } from "react";

// Imported Components
import { Chat } from "./components/Chat";

// Styled Components
import {
	AppS,
	ButtonArea,
	ButtonS,
	Image,
	InputContainer,
	InputS,
} from "./App.style";

// Images
import SendIcon from "./assets/img/send.png";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useUpdateEffect } from "./utils/useUpdateEffect";

// Functional Component
function App() {
	// Variables
	const [messageWriting, setMessageWriting] = useState("");
	const [newId, setNewId] = useState("");

	const lastMessageRef = query(
		collectionMessages,
		orderBy("createdAt", "desc"),
		limit(1)
	);

	const [lastMessage] = useCollectionData(lastMessageRef, {
		snapshotListenOptions: {
			includeMetadataChanges: true,
		},
		snapshotOptions: {},
	});

	useUpdateEffect(() => {
		let undefiendLastMessage: any | undefined = lastMessage;
		let prevId = parseInt(undefiendLastMessage[0].id) + 1;
		setNewId(prevId.toString());
	}, [lastMessage, newId]);

	const sendMessage = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await setDoc(doc(db, "messages", newId), {
			text: messageWriting,
			photoURL: auth.currentUser?.photoURL,
			createdAt: serverTimestamp(),
			uid: auth.currentUser?.uid,
			id: newId,
		});

		setMessageWriting("");
	};

	// Rendering
	return (
		<AppS>
			{/* <button onClick={checkUser}>Ver usuario</button> */}
			<Chat />
			<form onSubmit={sendMessage}>
				<InputContainer>
					<InputS
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setMessageWriting(e.currentTarget.value)
						}
						placeholder="Digite sua mensagem..."
						value={messageWriting}
					/>
					<button type="submit">
						<Image src={SendIcon} />
					</button>
				</InputContainer>
			</form>
			<ButtonArea>
				<ButtonS onClick={signInWithGoogle}>Google Login</ButtonS>
				<ButtonS onClick={signOut}>Sair</ButtonS>
			</ButtonArea>
		</AppS>
	);
}

// Export
export default App;
