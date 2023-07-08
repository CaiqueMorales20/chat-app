// Imports
import { auth, db } from "./firebase/configs";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { checkUser, signInWithGoogle, signOut } from "./firebase/functions";
import { useState } from "react";
import { Chat } from "./components/Chat";

// Functional Component
function App() {
	// Variables
	const [messageWriting, setMessageWriting] = useState("");

	const sendMessage = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await setDoc(doc(db, "messages", messageWriting), {
			text: messageWriting,
			photoURL: auth.currentUser?.photoURL,
			createdAt: serverTimestamp(),
			uid: auth.currentUser?.uid,
		});

		setMessageWriting("");
	};

	// Rendering
	return (
		<>
			<p>Chat</p>
			<button onClick={signInWithGoogle}>Google Login</button>
			<button onClick={signOut}>Sair</button>
			<button onClick={checkUser}>Ver usuario</button>

			<p>Messages</p>
			<Chat />
			<form onSubmit={sendMessage}>
				<input
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setMessageWriting(e.currentTarget.value)
					}
					value={messageWriting}
				/>
				<button type="submit">Enviar mensagem</button>
			</form>
		</>
	);
}

// Export
export default App;
