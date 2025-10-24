import React, { useState } from 'react';
import NavBar from './NavBar';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import productsData from '../data/products';

// Author: Jaskirat
// Description: Project-1

// This is the main container for groceries app.
// It holds the cart state and connects all major components.

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]); // Cart state

  // Function to add a product to the cart
  const addToCart = (product, quantity) => {
    quantity = parseInt(quantity); // for Making sure it's a number so that correct amount can be calculated
    if (quantity <= 0 || isNaN(quantity)) {
      alert("Please enter a quantity greater than 0.");
      return;
    }

    // for Checking if the product is already in the cart
    // If yes, updating its quantity but if no, adding it as a new item

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
      setCart([...cart]); // Update cart
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

  // for Updating quantity of a specific item
  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      alert("Quantity must be at least 1. Use 'Remove' to delete item.");
      return;
    }

    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  };

  // Total number of items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-layout">
      <div className="main-content">
        <NavBar cartCount={totalItems} />
        <ProductsContainer products={productsData} addToCart={addToCart} />
      </div>
      {/* Now Passing updateQuantity to CartContainer */}
      <CartContainer
        cart={cart}
        removeFromCart={removeFromCart}
        emptyCart={emptyCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default GroceriesAppContainer;