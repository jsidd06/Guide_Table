import React, { useState } from "react";
import "../NewExpense/ExpenseForm.css";
const ExpenseForm = () => {
    const [enterTitle, setEnterTitle] = useState("");
    const [amount ,setAmount] = useState("");
    const [date,setDate] = useState("");
  const titleChangedHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  const amountChangedHandler = (event) => {
      setAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
      setDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangedHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangedHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangedHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
