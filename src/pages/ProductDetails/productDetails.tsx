import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/button/button';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import CommentsForm from '../../components/commentsForm/commentsForm';
import AverageRating from '../../components/averageRating/averageRating';
import ShowComments from '../../components/showComments/showComments';
import { useCartContext } from '../../context/CartContext';
import useMountTransition from '../../useMountTransition';
import styles from './productDetails.module.scss';

export interface Props {
    products: IProduct[];
}

function ProductDetails({ products }: Props) {
    const { title } = useLocation().state;
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const product = products.find(
        (product: IProduct) => product.title === title
    );

    //destructure product properties
    const { id, info, description, price, img } = product!;
    const [comments, setComments] = useState<IComments[]>([]);
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

    const increaseQuantity = (): void => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = (): void => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleAddInCart = (): void => {
        addToCart(id, quantity);
    };

    const handleFormVisibility = (): void => {
        setIsFormVisible(!isFormVisible);
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
                    <div className={styles.productDescription}>
                        {description}
                    </div>
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
                            onClick={handleAddInCart}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </article>
            <div className={styles.reviews}>
                <h4>Reviews</h4>
                {!comments.length && !isFormVisible ? (
                    <div>There is no reviews for this product</div>
                ) : (
                    comments.length && (
                        <div>
                            <ShowComments comments={comments} />
                        </div>
                    )
                )}
                <div>
                    <Button
                        onClick={handleFormVisibility}
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
                            className={`${styles.form} ${
                                hasTransitionedIn && styles.in
                            } ${isFormVisible && styles.visible}`}
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
