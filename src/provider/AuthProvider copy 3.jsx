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
    if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
        auth.signInWithPopup(provider)
        .then((result) => {
            setUser(result.user);
            console.log("User", result.user);
        }).catch((error) => {
            console.log(error);
        });
    } else {
        signInWithRedirect(auth, provider);
    }
};

	const logOut = () => {
		signOut(auth);
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
