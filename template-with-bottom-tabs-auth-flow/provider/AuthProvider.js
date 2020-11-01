import React, { createContext, useState, useEffect } from 'react';
import * as firebase from 'firebase';
const AuthContext = createContext();

const AuthProvider = (props) => {
	// user null = loading
	const [user, setUser] = useState(null);

	useEffect(() => {
		checkLogin();
	}, [user]);

	function checkLogin() {
		firebase.auth().onAuthStateChanged(function (u) {
			if (u) {
				setUser(true);
				// getUserData();
			} else {
				setUser(false);
				// setUserData(null);
			}
		});
	}

	return (
		<AuthContext.Provider
			value={{
				user,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
