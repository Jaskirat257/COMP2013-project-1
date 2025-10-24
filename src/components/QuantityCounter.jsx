// This component displays + and - buttons to change quantity
const QuantityCounter = ({ quantity, setQuantity }) => (
  <div className="quantity-counter">
    {/* for Decreasing quantity while making sure it's not below0 */}
    <button onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
    {/* Show current quantity */}
    <span>{quantity}</span>
    {/* Increase quantity */}
    <button onClick={() => setQuantity(quantity + 1)}>+</button>
  </div>
);
export default QuantityCounter;