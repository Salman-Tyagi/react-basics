import ExpenseItem from './components/ExpenseItem';
// import ProductItem from './components/ProductItem';
// import ExerciseComponent from './components/ExerciseComponent';

function App() {
  const expenses = [
    { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 13) },
    { title: 'New TV', amount: 799.59, date: new Date(2021, 2, 11) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 27) },
    { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 6, 11) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        // expense={expenses[0]}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        // expense={expenses[1]}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        // expense={expenses[2]}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        // expense={expenses[3]}
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
