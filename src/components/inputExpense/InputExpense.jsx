import React, { useState } from "react";
import InputForm from "./InputForm";
import "./InputExpense.css";
const InputExpense = (props) => {
  const formData = (newExpenseData) => {
    const dataRecvForm = {
      ...newExpenseData,
      id: "d1",
    };
    props.dataRecvFromExpense(dataRecvForm);
  };
  const [showAddExpense, setShowAddExpense] = useState(false);
  const showAddExpenseHandler = () => {
    setShowAddExpense(true);
  };
  const hideExpenseHandler = () => {
    setShowAddExpense(false);
  };
  let content = (
    <div className="input-expense">
      <div className="add-expense-button">
        <button onClick={showAddExpenseHandler}>Add Expense</button>
      </div>
    </div>
  );
  if (showAddExpense === false) {
    return content;
  }
  return (
    <div className="input-expense">
      <InputForm updateData={formData} onCancelExpense={hideExpenseHandler} />
    </div>
  );
};

export default InputExpense;
