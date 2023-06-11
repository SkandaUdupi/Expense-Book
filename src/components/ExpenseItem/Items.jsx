import "./Items.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
// import ExpenseChart from "./ExpenseChart";
const Items = ({ items }) => {
  const [year, setYear] = useState("2023");

  const yearRecv = (year) => {
    setYear(year);
  };
  const filterExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <>
      <div className="item">
        <ExpensesFilter defaultYear={year} getYear={yearRecv} />
        {/* <ExpenseChart expenses={filterExpenses} /> */}
        <ExpensesList filteredExpense={filterExpenses} />
      </div>
    </>
  );
};

export default Items;
