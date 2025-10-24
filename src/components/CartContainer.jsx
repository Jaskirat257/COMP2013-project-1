import "./CartContainer.css";
import CartCard from './CartCard';

//  This component Displays all cart items and total amount
const CartContainer = ({ cart, removeFromCart, emptyCart, updateQuantity }) => {
  // Calculating total price of items in cart
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price); // Ensuring price is a number so that we can get accurate total bill
    const quantity = parseInt(item.quantity); // Ensuring quantity is a number 
    return sum + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
  }, 0).toFixed(2);

  return (
    <div className="cart-summary">
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {/* Displaying each item in the cart  */}
          {cart.map(item => (
            <CartCard
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          {/* For displaying total price */}
          <p><strong>Total Amount:</strong> ${total}</p>
           {/* Buttons to clear cart or proceed */}
          <button onClick={emptyCart}>Empty Cart</button>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartContainer;