import React, { useState } from 'react';
import NavBar from './NavBar';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import productsData from '../data/products';

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Please enter a quantity greater than 0.");
      return;
    }

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const emptyCart = () => setCart([]);

  return (
    <div className="app-layout">
  <div className="main-content">
    <NavBar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
    <ProductsContainer products={productsData} addToCart={addToCart} />
  </div>
  <CartContainer cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} />
</div>
  );
};

export default GroceriesAppContainer;