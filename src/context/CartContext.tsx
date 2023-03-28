import React, { FC, createContext, useContext, useState } from 'react';
import { initialCart } from './initialCart';

type CartContextProps = {
	addToCart: (id: number, quantity: number) => void;
	removeFromCart: (id: number, quantity: number) => void;
	getCartItemQuantity: (id: number) => number;
	totalCartItemsAmount: () => number;
	cartItems: { [key: number]: number };
};

type CartContextProviderProps = {
	children: React.ReactNode;
};

export const CartContext = createContext<CartContextProps>(null!);
//custom hook for consuming context
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider: FC<CartContextProviderProps> = ({
	children,
}) => {
	const [cartItems, setCartItems] = useState(initialCart());

	const addToCart = (id: number, quantity: number) => {
		setCartItems((prev) => ({ ...prev, [id]: quantity }));
	};

	const removeFromCart = (id: number, quantity: number) => {
		setCartItems((prev) => ({
			...prev,
			[id]: quantity > 0 ? prev[id] - 1 : quantity,
		}));
	};

	const getCartItemQuantity = (id: number) => {
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
