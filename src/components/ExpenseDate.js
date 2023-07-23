import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'short' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.toLocaleString('en-US', { year: 'numeric' });

  return (
    <div className="expense-item--date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
