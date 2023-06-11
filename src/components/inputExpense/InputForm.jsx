import React, { useState } from "react";

const InputForm = (props) => {
  const [newTitle, setTitle] = useState("");
  const [newAmount, setAmount] = useState("");
  const [newDate, setDate] = useState("");

  const updateTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const updateAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const updateDateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };

    setTitle("");
    setAmount("");
    setDate("");

    props.updateData(expenseData);
    props.onCancelExpense();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-controls">
        <div className="upper-container">
          <div className="expense-control">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={updateTitleHandler} />
          </div>
          <div className="expense-control">
            <label>Amount</label>
            <input
              type="number"
              value={newAmount}
              onChange={updateAmountHandler}
              min="0.01"
              step="0.01"
            />
          </div>
        </div>
        <div className="expense-control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            onChange={updateDateHandler}
            min="01-01-2020"
            max="01-01-2026"
          />
        </div>
        <div className="expense-action">
          <button className="submit" type="submit">
            Add Expense
          </button>
          <button onClick={props.onCancelExpense}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
