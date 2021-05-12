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

const App = () => {
	return (
		<GlobalStateProvider>
			<div className="container">
				<div className="app-wrapper">
					<Header />
					<Balance />
					<AddTransaction />
					<IncomeList />
					<ExpenseList />
				</div>
			</div>
		</GlobalStateProvider>
	);
};

export default App;
