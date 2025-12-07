import {createContext, useEffect, useState} from "react";

export const AuthUserProviderContext = createContext();

export default function AuthProvider({children}){

	const [isUserVerified, setUserVirified] = useState(false);
	const [userSignUp, setUserSignUp] = useState([]);
	const [userLogin, setUserLogin] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState([]);

	useEffect(() => {
		//checker if user is already logged in or not 
		console.log("I will go to the server");
		setUserVirified(true);
	}, [userSignUp, userLogin]);


	return (

		<AuthUserProviderContext.Provider value={{userSignUp, setUserSignUp, userLogin, setUserLogin, isUserVerified, loading, error}}>
			{children}
		</AuthUserProviderContext.Provider>
	)

}