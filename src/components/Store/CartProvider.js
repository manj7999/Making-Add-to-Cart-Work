import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItems = (newItem) => {
    const existingItemIndex = cart.findIndex((item) => item.productId === newItem.productId);
    let updatedCart;
    if (existingItemIndex !== -1) {
      const existingItem = cart[existingItemIndex];
      const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
      updatedCart = [...cart];
      updatedCart[existingItemIndex] = updatedItem;
    } else {
      const updatedNewItem = { ...newItem, quantity: 1 };
      updatedCart = [...cart, updatedNewItem];
    }
    setCart(updatedCart);
  };

  const removeItems = () => {
    // Implementation for removing items if needed
  };

  const contextValue = {
    cart,
    addItems,
    removeItems
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
