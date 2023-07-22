import './ProductItem.css';

function ProductItem(props) {
  return (
    <div className="product">
      <h3>{props.title}</h3>
      <p className="product--price">${props.price}</p>
      <p className="product--number">{props.description}</p>
    </div>
  );
}

export default ProductItem;
