import React, { useState } from "react";
import "../NewExpense/ExpenseForm.css";
const ExpenseForm = () => {
    const [enterTitle, setEnterTitle] = useState("");
    const [enterAmount ,setEnterAmount] = useState("");
    const [enterDate,setEnterDate] = useState("");
  const titleChangedHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  const amountChangedHandler = (event) => {
      setEnterAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
      setEnterDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    }
    console.log(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangedHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            onChange={amountChangedHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
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
