import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className="input-form">
        <div className="form-title-amount">
          <label className="input-form--title">Title</label>
          <input type="text" />

          <label className="input-form--amount">Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <label className="input-form--date">Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" />

        <div className="btn">
          <button className="btn-submit" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
