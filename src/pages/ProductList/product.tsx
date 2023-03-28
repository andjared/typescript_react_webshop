import React, { useState, FC } from 'react';
import { useCartContext } from '../../context/CartContext';
import Button from '../../components/button/button';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import styles from './product.module.scss';
import { IProduct } from '../../products';

interface ProductProps {
	product: IProduct;
}

const Product: FC<ProductProps> = ({ product: { id, img, title, info } }) => {
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
				<img src={img} alt={title} />
			</div>
			<div className={styles.productContent}>
				<h3 className={styles.productTitle}>{title}</h3>
				<p className={styles.productInfo}>{info}</p>
			</div>
			<div className={styles.productBtns}>
				<Button
					className='addToCartBtn'
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
};

export default Product;
