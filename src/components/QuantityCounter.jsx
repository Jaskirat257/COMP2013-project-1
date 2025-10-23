const QuantityCounter = ({ quantity, setQuantity }) => (
  <div className="quantity-counter">
    <button onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
    <span>{quantity}</span>
    <button onClick={() => setQuantity(quantity + 1)}>+</button>
  </div>
);
export default QuantityCounter;