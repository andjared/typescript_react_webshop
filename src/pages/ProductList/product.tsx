import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import Button from '../../components/button/button';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import styles from './product.module.scss';
import { Link } from 'react-router-dom';

export interface Props {
	product: Product;
}

function Product({ product: { id, img, title, info, price } }: Props) {
	const { addToCart } = useCartContext();
	const [quantity, setQuantity] = useState<number>(1);

	const increaseQuantity = () => {
		setQuantity((prev) => prev + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
	};

	return (
		<article className={styles.product}>
			<div className={styles.productImage}>
				<Link to={'/productDetails'} state={{ title }} key={id}>
					<img src={require(`../../assets${img}`)} alt={title} />
				</Link>
			</div>
			<div className={styles.productContent}>
				<h3 className={styles.productTitle}>{title}</h3>
				<div className={styles.additional}>
					<p>{info}</p>
					<span>${price}</span>
				</div>
			</div>
			<div className={styles.productBtns}>
				<Button
					className='btnFillToRight'
					onClick={() => addToCart(id, quantity)}
				>
					Add to Cart
				</Button>
				<QuantityHandler
					quantity={String(quantity)}
					increaseQuantity={increaseQuantity}
					decreaseQuantity={decreaseQuantity}
				/>
			</div>
		</article>
	);
}

export default Product;
