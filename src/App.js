import React from "react";
import "./App.css";
//& components
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
//& context
import { GlobalStateProvider } from "./context/GlobalState";
//& firebase
import { useAuthState } from "react-firebase-hooks/auth";
import firebase, { auth } from "./firebase/config";

const App = () => {
	const [user] = useAuthState(auth);

	const signIn = () => {
		auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};

	const RenderComponents = () => {
		if (!user)
			return (
				<div className="btn-wrap">
					<button className="sign-in" onClick={signIn}>
						Sign In With Google
					</button>
				</div>
			);

		return (
			<>
				<Balance auth={auth} />
				<AddTransaction auth={auth} />
				<IncomeList auth={auth} />
				<ExpenseList auth={auth} />
			</>
		);
	};

	return (
		<GlobalStateProvider user={user} auth={auth}>
			<div className="container">
				<div className="app-wrapper">
					<Header />
					<RenderComponents />
				</div>
			</div>
		</GlobalStateProvider>
	);
};

export default App;
