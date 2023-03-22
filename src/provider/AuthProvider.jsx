import { useContext, createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	signInWithRedirect,
	getAuth,
	getRedirectResult,
	signOut,
	onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const googleSignIn = async () => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithRedirect(auth, provider);
			const result = await getRedirectResult(auth);
			setUser(result.user);
		} catch (error) {
			console.log(error);
		}
	};

	const logOut = async () => {
		try {
			await signOut(auth);
			setUser(null);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log("User", currentUser);
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
