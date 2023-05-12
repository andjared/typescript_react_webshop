import React, { createContext, useContext, useState } from 'react';

export type CartProps = {
    [key: number]: number;
};

type CartContextProps = {
    addToCart: (id: number, quantity: number) => void;
    removeFromCart: (id: number, quantity: number) => void;
    totalCartItemsAmount: () => number;
    cartItems: CartProps;
};

type CartContextProviderProps = {
    children: React.ReactNode;
};

export const CartContext = createContext<CartContextProps>(null!);
//custom hook for consuming context
export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartProps>({});

    const addToCart = (id: number, quantity: number) => {
        setCartItems((prev) => ({
            ...prev,
            [id]: quantity,
        }));
    };

    const removeFromCart = (id: number, quantity: number) => {
        setCartItems((prev) => ({
            ...prev,
            [id]: quantity > 0 ? prev[id] - 1 : quantity,
        }));
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
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
