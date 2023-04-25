import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/button/button';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import { useCartContext } from '../../context/CartContext';
import styles from './productDetails.module.scss';
import CommentsForm from '../../components/commentsForm/commentsForm';
import ShowComments from '../../components/showComments/showComments';
import useMountTransition from '../../useMountTransition';
import AverageRating from '../../components/averageRating/averageRating';

export interface Props {
	products: Product[];
}

function ProductDetails({ products }: Props) {
	const { title } = useLocation().state;
	const [isFormVisible, setIsFormVisible] = useState(false);
	const product = products.find((product: Product) => product.title === title);

	//destructure product properties
	const { id, info, description, price, img } = product!;
	const [comments, setComments] = useState<Comments[]>([]);
	const hasTransitionedIn = useMountTransition(isFormVisible, 500);

	useEffect(() => {
		const getComments = async (id: number) => {
			try {
				const res = await fetch(
					`http://localhost:3000/api/products/${id}/comments`
				);
				const data = await res.json();
				setComments(data);
			} catch (err) {
				console.log(err);
			}
		};
		getComments(id);
	}, [id]);

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
					<img src={require(`../../assets${img}`)} alt={title} />
				</div>
				<div className={styles.productContent}>
					<h3 className={styles.productTitle}>{title}</h3>
					<AverageRating id={id} />
					<div className={styles.productInfo}>{info}</div>
					<div className={styles.productDescription}>{description}</div>
					<div className={styles.productBtns}>
						<div className={styles.additional}>
							<QuantityHandler
								quantity={String(quantity)}
								increaseQuantity={increaseQuantity}
								decreaseQuantity={decreaseQuantity}
							/>
							<span>${price}</span>
						</div>
						<Button
							className='btnFillToRight'
							onClick={() => addToCart(id, quantity)}
						>
							Add to Cart
						</Button>
					</div>
				</div>
			</article>
			<div className={styles.reviews}>
				<h4>Reviews</h4>
				{comments.length && !isFormVisible ? (
					<div>
						<ShowComments comments={comments} />
					</div>
				) : (
					!isFormVisible && <div>There is no reviews for this product</div>
				)}

				<div>
					<Button
						onClick={() => setIsFormVisible(!isFormVisible)}
						className='handleCommentsFormBtn'
					>
						<span>
							{isFormVisible
								? 'Close'
								: comments.length
								? 'Write New Review'
								: 'Be the first to write a review'}
						</span>
					</Button>

					{(hasTransitionedIn || isFormVisible) && (
						<div
							className={`${styles.form} ${hasTransitionedIn && styles.in} ${
								isFormVisible && styles.visible
							}`}
						>
							<CommentsForm id={id} />
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default ProductDetails;
