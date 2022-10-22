import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

/**
 * Create and ExpenseItem composed by a date object, title and amount.
 *
 * @param {*} props Object that has at least three fields:
 * date (Date object), title (String) and amount (Number).
 *
 * @returns
 */
function ExpenseItem(props) {
  // This is a React hook (use#, only can be called inside the component functions).
  const [expenseTitle, setExpenseTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setExpenseTitle("Title Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
