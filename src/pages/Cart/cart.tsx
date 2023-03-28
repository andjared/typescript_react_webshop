import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Button from '../../components/button/button';
import CartItem from './cartItem';
import { products } from '../../products';
import styles from './cart.module.scss';

const Cart = () => {
	const { cartItems, totalCartItemsAmount } = useCartContext();
	return (
		<section className={styles.cart}>
			{products
				.filter((product) => cartItems[product.id] !== 0)
				.map((product) => {
					return <CartItem product={product} key={product.id} />;
				})}
			{totalCartItemsAmount() > 0 ? (
				<div>
					<Button className='cartPaymentBtn'>Continue with payment</Button>
				</div>
			) : (
				<div className={styles.cartRedirect}>
					Your cart is empty. Browse products <Link to='/'>here</Link>.
				</div>
			)}
		</section>
	);
};

export default Cart;
