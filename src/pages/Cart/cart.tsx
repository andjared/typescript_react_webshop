import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Button from '../../components/button/button';
import CartItem from './cartItem';
import styles from './cart.module.scss';

export interface Props {
	products: IProduct[];
}

function Cart({ products }: Props) {
	const { cartItems, totalCartItemsAmount } = useCartContext();

	const items = products.filter((product) => Boolean(cartItems[product.id]));

	const totalPrice = () => {
		//extract price for each item based on amount in cart and then calculate sum
		const total = items
			.map((item) => Number(item.price) * cartItems[item.id])
			.reduce((acc, curr) => acc + curr, 0);
		return total;
	};

	return (
		<section className={styles.cart}>
			{totalCartItemsAmount() === 0 ? (
				<div className={styles.cartRedirect}>
					Your cart is empty. Browse products <Link to='/'>here</Link>.
				</div>
			) : (
				<>
					{items.map((product) => {
						return <CartItem product={product} key={product.id} />;
					})}
					<Button className='cartPaymentBtn'>
						<span>Checkout</span>
						<span className={styles.separatorDot}></span>
						<span>${totalPrice()}</span>
					</Button>
				</>
			)}
		</section>
	);
}

export default Cart;
