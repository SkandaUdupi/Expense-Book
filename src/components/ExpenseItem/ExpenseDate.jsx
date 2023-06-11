import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "short" });
  const weekday = props.date.toLocaleString("en-IN", { weekday: "short" });
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
  return (
    <div className="date">
      <div className="weekday">{weekday}</div>
      <div className="day">{day}</div>
      <div className="month">{month}</div>
    </div>
  );
};

export default ExpenseDate;
