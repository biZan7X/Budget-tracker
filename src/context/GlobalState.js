import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	incomeTransactions: [
		{ id: 1, incomeText: "car sold", incomeAmount: 15000 },
		{ id: 2, incomeText: "salary", incomeAmount: 150000 },
		{ id: 3, incomeText: "jackpot", incomeAmount: 15000 },
	],
	expenseTransactions: [
		{ id: 4, expenseText: "food", expenseAmount: 150 },
		{ id: 5, expenseText: "phone", expenseAmount: 150 },
		{ id: 6, expenseText: "travel", expenseAmount: 1500 },
	],
};

export const GlobalContext = createContext(initialState);

export const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<GlobalContext.Provider
			value={{
				incomeTransactions: state.incomeTransactions,
				expenseTransactions: state.expenseTransactions,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
