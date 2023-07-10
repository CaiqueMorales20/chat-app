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
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useUpdateEffect } from "./utils/useUpdateEffect";

// Imported Components
import { Chat } from "./components/Chat";

// Styled Components
import {
	AppS,
	ButtonArea,
	ButtonImage,
	ImageContainer,
	ButtonS,
	Image,
	InputContainer,
	InputS,
	SendBtn,
	ChatTitle,
} from "./App.style";

// Images
import SendIcon from "./assets/img/send.png";
import GoogleIcon from "./assets/img/google.png";
import LogoutIcon from "./assets/img/logout.png";

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
		if (undefiendLastMessage == undefined) return setNewId("1");
		let prevId = parseInt(undefiendLastMessage[0].id) + 1;
		setNewId(prevId.toString());
	}, [lastMessage, newId]);

	const sendMessage = async () => {
		if (messageWriting.length < 1) return;
		await setDoc(doc(db, "messages", newId), {
			text: messageWriting,
			name: auth.currentUser?.displayName,
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
			{auth.currentUser ? (
				<>
					<ChatTitle>Conversa</ChatTitle>
					<Chat />
					<InputContainer>
						<InputS
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setMessageWriting(e.currentTarget.value)
							}
							placeholder="Digite sua mensagem..."
							value={messageWriting}
						/>
						<SendBtn onClick={() => sendMessage()}>
							<ImageContainer>
								<Image src={SendIcon} />
							</ImageContainer>
						</SendBtn>
					</InputContainer>
					<ButtonArea>
						<ButtonS onClick={signOut}>
							<ButtonImage src={LogoutIcon} />
							Sair
						</ButtonS>
					</ButtonArea>
				</>
			) : (
				<ButtonArea>
					<ButtonS onClick={signInWithGoogle}>
						<ButtonImage src={GoogleIcon} />
						Google Login
					</ButtonS>
				</ButtonArea>
			)}
		</AppS>
	);
}

// Export
export default App;
