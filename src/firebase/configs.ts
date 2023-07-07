// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBbOqCJKYMunAaGu-7PCE4-G77o7WBYF-o",
	authDomain: "chat-app-111103.firebaseapp.com",
	projectId: "chat-app-111103",
	storageBucket: "chat-app-111103.appspot.com",
	messagingSenderId: "528927645895",
	appId: "1:528927645895:web:0816fc0f822d02d97c5ee2",
	measurementId: "G-2KC3G7539B",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
