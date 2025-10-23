import "./CartContainer.css";

import CartCard from './CartCard';

const CartContainer = ({ cart, removeFromCart, emptyCart }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>No Items in the cart.</p>
    ) : (
      <>
        {cart.map(item => (
          <CartCard key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
        <button onClick={emptyCart}>Empty Cart</button>
        <button>Buy (${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)})</button>
      </>
    )}
  </div>


);
export default CartContainer;