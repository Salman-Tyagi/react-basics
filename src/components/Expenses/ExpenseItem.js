import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = props => {
  const clickHandler = () => console.log('Clicked!!!');

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item--description">
        <h2 className="expense-item--title">{props.title}</h2>
        <div className="expense-item--price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
