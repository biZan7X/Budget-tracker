import React from "react";
import { db } from "../firebase/config";

const ExpenseTransaction = ({ expenseTransaction }) => {
	const onClickHandler = (id) => {
		db.collection("expenseTransactions").doc(id).delete();
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
