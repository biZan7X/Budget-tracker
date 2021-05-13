import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase/config";

const initialState = {
	incomeTransactions: [],
	expenseTransactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalStateProvider = ({ children }) => {
	const [incomeTransactions, setIncomeTransactions] = useState([]);
	const [expenseTransactions, setExpenseTransactions] = useState([]);

	useEffect(() => {
		const unsub = db.collection("incomeTransactions").onSnapshot((query) => {
			setIncomeTransactions(
				query.docs.map((doc) => ({
					id: doc.id,
					incomeText: doc.data().incomeText,
					incomeAmount: doc.data().incomeAmount,
				}))
			);
		});

		return () => {
			unsub();
		};
	});

	useEffect(() => {
		const unsub = db.collection("expenseTransactions").onSnapshot((query) => {
			setExpenseTransactions(
				query.docs.map((doc) => ({
					id: doc.id,
					expenseText: doc.data().expenseText,
					expenseAmount: doc.data().expenseAmount,
				}))
			);
		});

		return () => {
			unsub();
		};
	});

	return (
		<GlobalContext.Provider
			value={{
				incomeTransactions,
				expenseTransactions,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
