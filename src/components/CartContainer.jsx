import "./CartContainer.css";

import CartCard from './CartCard';

// This component displays all items in the cart and the total amount
const CartContainer = ({ cart, removeFromCart, emptyCart }) => (
  <div className="cart-summary">
  {cart.length === 0 ? (
    <p>No items in cart</p>
  ) : (
    <>
    {/* Display each item in the cart */}
      {cart.map(item => (
        <CartCard key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}

      {/* Show total price */}
      <p>Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
       {/* Buttons to clear cart or proceed */}
      <button onClick={emptyCart}>Empty Cart</button>
      <button>Checkout</button>
    </>
  )}
</div>

);
export default CartContainer;