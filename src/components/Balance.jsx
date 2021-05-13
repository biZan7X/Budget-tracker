import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
	const { incomeTransactions, expenseTransactions } =
		useContext(GlobalContext);

	let totalIncome = 0;
	let totalExpense = 0;

	incomeTransactions.forEach(
		(incomeTransaction) => (totalIncome += incomeTransaction.incomeAmount)
	);

	expenseTransactions.forEach(
		(expenseTransaction) => (totalExpense += expenseTransaction.expenseAmount)
	);

	return (
		<div className="balance">
			<h2>Your balance</h2>
			<h3>₹{(totalIncome - totalExpense).toFixed(2)}</h3>
			<div className="income-expense">
				<div className="plus">
					<h3>income</h3>
					<p>+₹{totalIncome.toFixed(2)}</p>
				</div>
				<div className="minus">
					<h3>expense</h3>
					<p>-₹{totalExpense.toFixed(2)}</p>
				</div>
			</div>
		</div>
	);
};

export default Balance;
