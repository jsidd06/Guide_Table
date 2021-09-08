import React, { useState } from "react";
import Card from "../Card/Card";
import "../Expense/Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterExpenseHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p>No Expense found.</p>
  if(filterExpense.length > 0) {
    expenseContent = filterExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterExpenseHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expense;
