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

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    cartItems,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
