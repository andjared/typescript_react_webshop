export type cartType = {
	[key: number]: number;
};

export const initialCart = () => {
	const cart: cartType = {};

	return cart;
};
