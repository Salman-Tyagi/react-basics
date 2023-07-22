import './ExpenseItem.css';

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 20);
  // const expenseTitle = 'Car Insurance';
  // const expensePrice = 294.67;

  return (
    <div className="expense-item">
      <div className="expense-item--date">
        {props.date.toLocaleString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </div>
      <div className="expense-item--description">
        <h2>{props.title}</h2>
        <div className="expense-item--price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
