import QuantityCounter from './QuantityCounter';

const CartCard = ({ item, removeFromCart }) => (
  <div className="cart-card">
    <img src={item.image} alt={item.name} />
    <h4>{item.name}</h4>
    <p>${item.price}</p>
    <QuantityCounter quantity={item.quantity} setQuantity={() => {}} />
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
);
export default CartCard;