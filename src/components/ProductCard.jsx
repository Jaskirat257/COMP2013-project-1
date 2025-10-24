import { useState } from 'react';
import QuantityCounter from './QuantityCounter';

// This component shows one product with quantity selector and Add to Cart
const ProductCard = ({ product, addToCart }) => {
  // for tracking selected quantity
  const [quantity, setQuantity] = useState(1);
  
  return (
    <div className="product-card">
      {/* Product image */}
      <img src={product.image} alt={product.name} />
      {/* Product name and price */}
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {/* Quantity selector */}
      <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
      {/* Add to Cart button */}
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>

  );
};
export default ProductCard;