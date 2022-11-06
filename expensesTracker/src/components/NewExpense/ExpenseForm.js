import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [formState, setFormState] = useState(false);

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (event.nativeEvent.submitter.value === "add") {
      const expenseData = {
        title: userInput.enteredTitle,
        amount: +userInput.enteredAmount,
        date: new Date(userInput.enteredDate),
      };

      props.onSaveExpenseData(expenseData);

      setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    }

    setFormState(false);
  };

  const newExpenseSubmitHandler = (event) => {
    event.preventDefault();
    setFormState(true);
  };

  if (formState === false) {
    return (
      <form onSubmit={newExpenseSubmitHandler}>
        <div className="new-expense__actions_new">
          <button type="submit">Add New Expense</button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" value="cancel">
          Cancel
        </button>
        <button type="submit" value="add">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
