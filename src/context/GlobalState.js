import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase/config";

const initialState = {
	incomeTransactions: [],
	expenseTransactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalStateProvider = ({ children, user, auth }) => {
	const [incomeTransactions, setIncomeTransactions] = useState([]);
	const [expenseTransactions, setExpenseTransactions] = useState([]);

	useEffect(() => {
		console.log("invoked income");
		const link = user
			? `users/${auth.currentUser.uid}/incomeTransactions`
			: "incomeTransactions";
		const unsub = db.collection(link).onSnapshot((query) => {
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
	}, [user]);

	useEffect(() => {
		console.log("invoked expense");
		const link = user
			? `users/${auth.currentUser.uid}/expenseTransactions`
			: "expenseTransactions";
		const unsub = db.collection(link).onSnapshot((query) => {
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
	}, [user]);

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
