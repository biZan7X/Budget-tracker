import React from "react";

const Balance = () => {
	return (
		<div className="balance">
			<h2>Your balance</h2>
			<h3>₹500</h3>
			<div className="income-expense">
				<div className="plus">
					<h3>income</h3>
					<p>+₹0.00</p>
				</div>
				<div className="minus">
					<h3>expense</h3>
					<p>-₹0.00</p>
				</div>
			</div>
		</div>
	);
};

export default Balance;
