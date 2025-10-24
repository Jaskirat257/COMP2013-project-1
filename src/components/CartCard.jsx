import QuantityCounter from './QuantityCounter';

// for Displaying one item in the cart 
const CartCard = ({ item, removeFromCart, updateQuantity }) => (
  <div className="cart-card">
    <img src={item.image} alt={item.name} />
    {/* Product name and price */}
    <h4>{item.name}</h4>
    <p>${item.price}</p>

  {/* Quantity control buttons */}
    {/* QuantityCounter updates quantity using updateQuantity */}
    <QuantityCounter
      quantity={item.quantity}
      setQuantity={(newQty) => updateQuantity(item.id, newQty)}
    />
     
      {/* Button to remove item from cart */}
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
);

export default CartCard;