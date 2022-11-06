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
  const [expenseTitle, setExpenseTitle] = useState(props.title);

  const clickHandler = () => {
    setExpenseTitle("Title Updated");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
