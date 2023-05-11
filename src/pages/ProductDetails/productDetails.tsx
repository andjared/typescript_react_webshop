import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/button/button';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import AverageRating from '../../components/averageRating/averageRating';
import DynamicImage from '../../components/dynamicImage/dynamicImage';
import Reviews from '../../components/reviews/reviews';
import { useCartContext } from '../../context/CartContext';
import styles from './productDetails.module.scss';

export interface Props {
    products: IProduct[];
}

function ProductDetails({ products }: Props) {
    const [quantity, setQuantity] = useState<number>(1);
    const { addToCart } = useCartContext();
    const { state } = useLocation();
    const { title, comments } = state;

    const product = useMemo(() => {
        return products.find((product: IProduct) => product.title === title);
    }, [products, title]);

    //destructure product properties
    const { id, info, description, price, img } = product!;

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

    return (
        <section className={styles.productDetails}>
            <article className={styles.product}>
                <div className={styles.productImage}>
                    <DynamicImage path={img} title={title} />
                </div>
                <div className={styles.productContent}>
                    <h3 className={styles.productTitle}>{title}</h3>
                    {comments.length && <AverageRating comments={comments} />}
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
                            className="btnFillToRight"
                            onClick={handleAddInCart}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </article>
            <Reviews id={id} />
        </section>
    );
}

export default ProductDetails;
