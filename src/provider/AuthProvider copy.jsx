import { useContext, createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	signOut,
	onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const browser = window.navigator.userAgent.toLowerCase();
	const isYandex = browser.includes("yandex");
	const isChrome = browser.includes("chrome");
	const isFirefox = browser.includes("firefox");
	const isEdge = browser.includes("edge");
	const isSafari = browser.includes("safari");

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		if (isYandex || isChrome || isFirefox || isEdge) {
			signInWithRedirect(auth, provider);
		} else if (isSafari) {
			signInWithPopup(auth, provider);
		}
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			// console.log("User", currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ googleSignIn, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
