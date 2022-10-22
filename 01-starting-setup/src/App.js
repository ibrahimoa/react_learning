import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Gaming Laptop",
      amount: 1199.95,
      date: new Date(2020, 24, 5),
    },
    {
      id: "e2",
      title: "Protein Bars",
      amount: 49.25,
      date: new Date(2022, 15, 6),
    },
    {
      id: "e3",
      title: "Wireless Keyboard",
      amount: 105.15,
      date: new Date(2022, 17, 9),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    expenses.push(expense);
    console.log(expenses);
  };

  return (
    <div>
      <h2>Expenses Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
