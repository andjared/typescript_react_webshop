import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import AverageRating from '../../components/averageRating/averageRating';
import DynamicImage from '../../components/dynamicImage/dynamicImage';
import { useCartContext } from '../../context/CartContext';
import styles from './product.module.scss';

export interface Props {
    product: IProduct;
}

function Product({ product: { id, img, title, info, price } }: Props) {
    const [comments, setComments] = useState<IComments[]>([]);
    const [quantity, setQuantity] = useState<number>(1);

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
    }, []);

    const { addToCart } = useCartContext();

    const increaseQuantity = (): void => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = (): void => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <article className={styles.product}>
            <div className={styles.productImage}>
                <Link
                    to={'/productDetails'}
                    state={{
                        title,
                        comments,
                    }}
                    key={id}
                >
                    <DynamicImage path={img} title={title} />
                </Link>
            </div>
            <div className={styles.productContent}>
                <h3 className={styles.productTitle}>{title}</h3>
                <div className={styles.productRating}>
                    {comments.length && <AverageRating comments={comments} />}
                </div>
                <p className={styles.productInfo}>{info}</p>
                <span className={styles.productPrice}>${price}</span>
            </div>
            <div className={styles.productBtns}>
                <Button
                    className="btnFillToRight"
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
