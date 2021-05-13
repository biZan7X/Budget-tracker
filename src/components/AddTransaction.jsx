import React, { useState } from "react";
import firebase, { db } from "../firebase/config";

const AddTransaction = () => {
	const [income, setIncome] = useState({
		incomeText: "",
		incomeAmount: 0,
	});

	const [expense, setExpense] = useState({
		expenseText: "",
		expenseAmount: 0,
	});

	//~ destructuring
	const { incomeText, incomeAmount } = income;
	const { expenseText, expenseAmount } = expense;

	const onChangeIncome = (e) => {
		setIncome({ ...income, [e.target.name]: e.target.value });
	};

	const onChangeExpense = (e) => {
		setExpense({ ...expense, [e.target.name]: e.target.value });
	};

	const onSubmitIncome = (e) => {
		e.preventDefault();

		if (incomeText === "" || incomeText === " ")
			return alert("please add an income name");

		//~ creating a new income transaction
		const newIncomeTransaction = {
			incomeText,
			incomeAmount: incomeAmount * 1, //* to make it a number
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		};

		//~ storing the new object
		db.collection("incomeTransactions").add(newIncomeTransaction);

		//~ resetting the input fields
		setIncome({
			incomeText: "",
			incomeAmount: 0,
		});
	};

	const onSubmitExpense = (e) => {
		e.preventDefault();

		if (expenseText === "" || expenseText === " ")
			return alert("please add an expense name");

		//~ creating a new income transaction
		const newExpenseTransaction = {
			expenseText,
			expenseAmount: expenseAmount * 1, //* to make it a number
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		};

		//~ storing the new object
		db.collection("expenseTransactions").add(newExpenseTransaction);

		//~ resetting the input fields
		setExpense({
			expenseText: "",
			expenseAmount: 0,
		});
	};

	return (
		<div className="form-wrapper">
			<form onSubmit={onSubmitIncome}>
				<div className="input-group income">
					<input
						type="text"
						name="incomeText"
						value={incomeText}
						onChange={onChangeIncome}
						placeholder="add income"
						autoComplete="off"
					/>
					<input
						type="number"
						name="incomeAmount"
						placeholder="amount"
						value={incomeAmount}
						onChange={onChangeIncome}
						autoComplete="off"
					/>
					<input type="submit" value="Submit" />
				</div>
			</form>
			<form onSubmit={onSubmitExpense}>
				<div className="input-group expense">
					<input
						type="text"
						name="expenseText"
						placeholder="add expense"
						value={expenseText}
						onChange={onChangeExpense}
						autoComplete="off"
					/>
					<input
						type="number"
						name="expenseAmount"
						placeholder="amount"
						value={expenseAmount}
						onChange={onChangeExpense}
						autoComplete="off"
					/>
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
};

export default AddTransaction;
