import React from 'react';
import { useCartContext } from '../../context/CartContext';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import Button from '../../components/button/button';
import styles from './cartItem.module.scss';

interface Props {
	product: Product;
}

function CartItem({ product: { id, img, title, info } }: Props) {
	const { removeFromCart, getCartItemQuantity, addToCart } = useCartContext();

	const increaseQuantity = (id: number) => {
		const quantity = getCartItemQuantity(id) + 1;
		addToCart(id, quantity);
	};

	const decreaseQuantity = (id: number) => {
		const quantity = getCartItemQuantity(id) - 1;
		removeFromCart(id, quantity);
	};

	return (
		<article className={styles.cartItem}>
			<div className={styles.cartItemImage}>
				<img src={img} alt={title} />
			</div>
			<div className={styles.cartItemContent}>
				<h4 className={title}>{title}</h4>
				<p className={styles.cartItemInfo}>{info}</p>
				<div className={styles.cartItemQuantity}>
					<QuantityHandler
						quantity={String(getCartItemQuantity(id))}
						increaseQuantity={() => increaseQuantity(id)}
						decreaseQuantity={() => decreaseQuantity(id)}
					/>
					<Button
						className='removeFromCartBtn'
						onClick={() => removeFromCart(id, 0)}
					>
						Remove
					</Button>
				</div>
			</div>
		</article>
	);
}

export default CartItem;
