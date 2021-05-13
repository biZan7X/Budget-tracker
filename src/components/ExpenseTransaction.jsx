import React from "react";
import { db } from "../firebase/config";

const ExpenseTransaction = ({ expenseTransaction, auth }) => {
	const onClickHandler = (id) => {
		db.collection(`users/${auth.currentUser.uid}/expenseTransactions`)
			.doc(id)
			.delete();
	};
	return (
		<li className="transaction">
			<span className="transaction-text">
				{expenseTransaction.expenseText}
			</span>
			<span className="transaction-amount">
				₹{expenseTransaction.expenseAmount}
			</span>
			<button
				className="delete-btn"
				onClick={() => onClickHandler(expenseTransaction.id)}
			>
				<i className="fas fa-trash"></i>
			</button>
		</li>
	);
};

export default ExpenseTransaction;
