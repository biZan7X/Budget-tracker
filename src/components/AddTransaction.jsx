import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
	const { addIncome, addExpense } = useContext(GlobalContext);

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

		//~ creating a new income transaction
		const newIncomeTransaction = {
			id: uuidv4(),
			incomeText,
			incomeAmount: incomeAmount * 1, //* to make it a number
		};

		//~ storing the new object
		addIncome(newIncomeTransaction);

		//~ resetting the input fields
		setIncome({
			incomeText: "",
			incomeAmount: 0,
		});
	};

	const onSubmitExpense = (e) => {
		e.preventDefault();

		//~ creating a new income transaction
		const newExpenseTransaction = {
			id: uuidv4(),
			expenseText,
			expenseAmount: expenseAmount * 1, //* to make it a number
		};

		//~ storing the new object
		addExpense(newExpenseTransaction);

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
