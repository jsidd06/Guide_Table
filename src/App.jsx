import React from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {
          id: "e1",
          title: "Total Paper",
          amount: 94.12,
          date: new Date(2021, 3, 9),
        },
        {
          id: "e2",
          title: "New Tv",
          amount: 799.49,
          date: new Date(2021, 2, 28),
        },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2021, 5, 29),
        },
        {
          id: "e4",
          title: "New desk (Wonden)",
          amount: 450,
          date: new Date(2021, 6, 30),
        },
      ];
  
  return (
    <div>
      <NewExpense />
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
