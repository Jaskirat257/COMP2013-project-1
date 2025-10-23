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
    <>
      <NavBar cartCount={cart.length} />
      <ProductsContainer products={productsData} addToCart={addToCart} />
      <CartContainer cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} />
    </>
  );
};

export default GroceriesAppContainer;