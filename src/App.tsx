// Imports
import { signInWithGoogle, signOutFunction } from "./firebase/functions";

// Functional Component
function App() {
	// Rendering
	return (
		<>
			<p>Chat</p>
			<button onClick={() => signInWithGoogle()}>Sign with google</button>
			<button onClick={() => signOutFunction()}>Logout</button>
		</>
	);
}

// Export
export default App;
