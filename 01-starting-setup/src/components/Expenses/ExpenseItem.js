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
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
