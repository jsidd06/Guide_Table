import React from "react";
import Expensetion from "./components/Expensetion/Expensetion";

function App() {
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
      <h2>Let's start</h2>
      <Expensetion
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <Expensetion
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <Expensetion
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <Expensetion
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
