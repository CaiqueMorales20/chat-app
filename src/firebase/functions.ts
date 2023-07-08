// Imports
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./configs";

// Functions
export const GoogleAuth = async () => {
	const authNew = await signInWithPopup(auth, provider);
	return authNew;
};

export const signInWithGoogle = async () => {
	const authNew = await GoogleAuth();
	console.log(authNew);
};

export const signOut = () => {
	auth.currentUser ? auth.signOut() : console.log("nao tem ninguem logado fio");
};

export const checkUser = () => {
	auth.currentUser
		? console.log(auth.currentUser)
		: console.log("nao tem ninguem logado fio");
};
