// Imports
import { signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth, provider } from "./configs";

// Functions
export const signInWithGoogle = async () => {
	await signInWithPopup(auth, provider);
};

export const signOutFunction = () => {
	signOut(auth)
		.then(() => {
			// Sign-out successful.
			console.log("deslogado");
		})
		.catch((error) => {
			console.log(error);
		});
};
