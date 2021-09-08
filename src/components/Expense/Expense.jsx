import React, { useState } from "react";
import Card from "../Card/Card";
import "../Expense/Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterExpenseHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterExpenseHandler}
        />
        <ExpenseList items={filterExpense} />
      </Card>
    </div>
  );
};

export default Expense;
