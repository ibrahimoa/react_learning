import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        ></ExpensesFilter>
        <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
        <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
        <ExpenseItem expense={props.expenses[2]}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
