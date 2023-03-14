import { createContext, useState } from "react";
import { products } from "./products";

const CartContext = createContext();

const initialCart = () => {
  //set for each item initial value of 0
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCart());

  const addToCart = (id, quantity) => {
    setCartItems((prev) => ({ ...prev, [id]: quantity }));
  };

  const removeFromCart = (id, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: quantity > 0 ? prev[id] - 1 : quantity,
    }));
  };

  const getCartItemQuantity = (id) => {
    let itemAmount = 0;

    for (const item in cartItems) {
      if (Number(item) === id && cartItems[item] > 0) {
        itemAmount += cartItems[item];
      }
    }
    return itemAmount;
  };

  const totalCartItemsAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalAmount += cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    cartItems,
    totalCartItemsAmount,
    getCartItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
