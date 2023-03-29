import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../../products';
import Button from '../../components/button/button';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import { useCartContext } from '../../context/CartContext';
import styles from './productDetails.module.scss';

function ProductDetails() {
	const { title } = useLocation().state;
	const product = products.find((product) => product.title === title);
	//destructure product properties
	const { img, id, info, description } = product!;

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
		<section className={styles.productDetails}>
			<article className={styles.product}>
				<div className={styles.productImage}>
					<img src={img} alt={title} />
				</div>
				<div className={styles.productContent}>
					<h3 className={styles.productTitle}>{title}</h3>
					<div className={styles.productInfo}>{info}</div>
					<div className={styles.productDescription}>{description}</div>

					<div className={styles.productBtns}>
						<div>
							<QuantityHandler
								quantity={String(quantity)}
								increaseQuantity={increaseQuantity}
								decreaseQuantity={decreaseQuantity}
							/>
						</div>
						<Button
							className='addToCartBtn'
							onClick={() => addToCart(id, quantity)}
						>
							Add to Cart
						</Button>
					</div>
				</div>
			</article>
		</section>
	);
}

export default ProductDetails;
