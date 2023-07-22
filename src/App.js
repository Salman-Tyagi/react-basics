import ExpenseItem from './components/ExpenseItem';
import ProductItem from './components/ProductItem';
import ExerciseComponent from './components/ExerciseComponent';

function App() {
  // const expenses = [
  //   { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 13) },
  //   { title: 'New TV', amount: 799.59, date: new Date(2021, 2, 11) },
  //   { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 27) },
  //   { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 6, 11) },
  // ];

  const product = [
    { title: 'Product 1', price: 10, description: 'First Product' },
    { title: 'Product 2', price: 20, description: 'Second Product' },
  ];

  return (
    <div className="container">
      <h1>My Demo Shop</h1>
      {/* <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}
      <ProductItem
        title={product[0].title}
        price={product[0].price}
        description={product[0].description}
      ></ProductItem>
      <ProductItem
        title={product[1].title}
        price={product[1].price}
        description={product[1].description}
      ></ProductItem>
    </div>
  );
}

export default App;
