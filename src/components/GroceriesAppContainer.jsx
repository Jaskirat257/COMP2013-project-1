import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import CartContainer from "./CartContainer.jsx";
import products from "../data/products.js";
import "../App.css";

function GroceriesAppContainer() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="groceries-app">
      <h1>Groceries App</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <CartContainer cartItems={cartItems} onRemove={handleRemoveFromCart} />
    </div>
  );
}

export default GroceriesAppContainer;