import React, { useState } from 'react';
import NavBar from './NavBar';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import productsData from '../data/products';

// This is the main container for groceries app.
// It holds the cart state and connects all major components.

const GroceriesAppContainer = () => {
  // It is to store items added to the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product, quantity) => {
    // It Prevent adding 0 items to the cart,it gives alert that we can't add 0 items in cart
    if (quantity <= 0) {
      alert("Please enter a quantity greater than 0.");
      return;
    }

    // Check if the product is already in the cart
    // If yes, update its quantity
    // If no, add it as a new item

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
// Function to empty the entire cart
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