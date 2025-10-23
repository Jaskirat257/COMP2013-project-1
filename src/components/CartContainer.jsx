import "./CartContainer.css";

import CartCard from './CartCard';

const CartContainer = ({ cart, removeFromCart, emptyCart }) => (
  <div className="cart-summary">
  {cart.length === 0 ? (
    <p>No items in cart</p>
  ) : (
    <>
      {cart.map(item => (
        <CartCard key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
      <button onClick={emptyCart}>Empty Cart</button>
      <button>Checkout</button>
    </>
  )}
</div>

);
export default CartContainer;