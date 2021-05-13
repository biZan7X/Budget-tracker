import React from "react";
import { db } from "../firebase/config";

const IncomeTransaction = ({ incomeTransaction, auth }) => {
	const onClickHandler = (id) => {
		db.collection(`users/${auth.currentUser.uid}/incomeTransactions`)
			.doc(id)
			.delete();
	};
	return (
		<li className="transaction">
			<span className="transaction-text">
				{incomeTransaction.incomeText}
			</span>
			<span className="transaction-amount">
				₹{incomeTransaction.incomeAmount}
			</span>
			<button
				className="delete-btn"
				onClick={() => {
					onClickHandler(incomeTransaction.id);
				}}
			>
				<i className="fas fa-trash"></i>
			</button>
		</li>
	);
};

export default IncomeTransaction;
