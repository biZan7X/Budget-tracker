import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = ({ auth }) => {
	const { expenseTransactions } = useContext(GlobalContext);
	return (
		<div className="transactions transactions-expense">
			<h2>Transaction History</h2>
			<ul className="transaction-list">
				{expenseTransactions &&
					expenseTransactions.map((expenseTransaction) => (
						<ExpenseTransaction
							key={expenseTransaction.id}
							expenseTransaction={expenseTransaction}
							auth={auth}
						/>
					))}
			</ul>
		</div>
	);
};

export default ExpenseList;
