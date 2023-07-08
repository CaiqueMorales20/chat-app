// Imports
import { signInWithGoogle, signOutFunction } from "./firebase/functions";
import { collectionMessages } from "./firebase/configs";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Functional Component
function App() {
	// Variables
	const [messages] = useCollectionData(collectionMessages, {
		snapshotListenOptions: {
			includeMetadataChanges: true,
		},
	});

	// Rendering
	return (
		<>
			<p>Chat</p>
			<button onClick={() => signInWithGoogle()}>Sign with google</button>
			<button onClick={() => signOutFunction()}>Logout</button>

			<p>Messages</p>
			{messages &&
				messages.map((item, index) => {
					return <p key={index}>{item.text}</p>;
				})}
		</>
	);
}

// Export
export default App;
