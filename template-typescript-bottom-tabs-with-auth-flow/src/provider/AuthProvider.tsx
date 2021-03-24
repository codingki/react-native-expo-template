import React, { createContext, useState, useEffect } from 'react';
import * as firebase from 'firebase';

type ContextProps = {
	user: null | boolean;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
	children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
	// user null = loading
	const [user, setUser] = useState<null | boolean>(null);

	useEffect(() => {
		checkLogin();
	}, []);

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
