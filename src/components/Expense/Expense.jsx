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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterExpenseHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
