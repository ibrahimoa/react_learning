import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
      <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
      <ExpenseItem expense={props.expenses[2]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
