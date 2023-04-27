import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import Button from '../../components/button/button';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import styles from './product.module.scss';
import { Link } from 'react-router-dom';
import AverageRating from '../../components/averageRating/averageRating';

export interface Props {
	product: IProduct;
}

function IProduct({ product: { id, img, title, info, price } }: Props) {
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
				<div className={styles.productRating}>
					<AverageRating id={id} />
				</div>
				<p className={styles.productInfo}>{info}</p>
				<span className={styles.productPrice}>${price}</span>
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

export default IProduct;
