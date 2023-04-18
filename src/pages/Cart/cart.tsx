import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Button from '../../components/button/button';
import CartItem from './cartItem';
import { Props } from '../ProductList/productList';
import styles from './cart.module.scss';

function Cart({ products }: Props) {
	const { cartItems, totalCartItemsAmount } = useCartContext();
	return (
		<section className={styles.cart}>
			{totalCartItemsAmount() === 0 ? (
				<div className={styles.cartRedirect}>
					Your cart is empty. Browse products <Link to='/'>here</Link>.
				</div>
			) : (
				<>
					{products
						.filter((product) => Boolean(cartItems[product.id]))
						.map((product) => {
							return <CartItem product={product} key={product.id} />;
						})}
					<Button className='cartPaymentBtn'>Continue with payment</Button>
				</>
			)}
		</section>
	);
}

export default Cart;
