import React from 'react';

import Expenses from './components/Expenses/Expenses';

const App = () => {
  const items = [
    { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 13) },
    { title: 'New TV', amount: 799.59, date: new Date(2021, 2, 11) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 27) },
    { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 6, 11) },
  ];

  return (
    <div>
      <div>Let's get started!</div>
      <Expenses item={items}></Expenses>
    </div>
  );
};

export default App;
