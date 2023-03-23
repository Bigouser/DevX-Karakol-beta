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

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();

		const browser = window.navigator.userAgent.toLowerCase();
		let signInMethod;

		switch (true) {
			case browser.includes("yandex"):
			case browser.includes("chrome"):
			case browser.includes("firefox"):
			case browser.includes("edge"):
				signInMethod = signInWithRedirect;
				break;
			case browser.includes("safari"):
				signInMethod = signInWithPopup;
				break;
			default:
				signInMethod = signInWithRedirect;
		}
		signInMethod(auth, provider);
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
