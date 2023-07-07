// Imports
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./configs";

// Functions
export const signInWithGoogle = () => {
	signInWithPopup(auth, provider);
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
