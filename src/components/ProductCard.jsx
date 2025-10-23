import { useState } from 'react';
import QuantityCounter from './QuantityCounter';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
  <img src={product.image} alt={product.name} />
  <h3>{product.name}</h3>
  <p>${product.price}</p>
  <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
</div>
  );
};
export default ProductCard;