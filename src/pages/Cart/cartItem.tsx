import React from 'react';
import { useCartContext } from '../../context/CartContext';
import QuantityHandler from '../../components/quantityHandler/quantityHandler';
import AverageRating from '../../components/averageRating/averageRating';
import Button from '../../components/button/button';
import DynamicImage from '../../components/dynamicImage/dynamicImage';
import styles from './cartItem.module.scss';

export interface Props {
    product: IProduct;
}

function CartItem({ product: { id, img, title, info, price } }: Props) {
    const { removeFromCart, getCartItemQuantity, addToCart } = useCartContext();

    const quantity: number = getCartItemQuantity(id);

    const increaseQuantity = (): void => {
        addToCart(id, quantity + 1);
    };

    const decreaseQuantity = (): void => {
        removeFromCart(id, quantity - 1);
    };

    const handleRemove = (): void => {
        //remove item from cart completely
        removeFromCart(id, 0);
    };

    return (
        <article className={styles.cartItem}>
            <div className={styles.cartItemImage}>
                <DynamicImage path={img} title={title} />
            </div>
            <div className={styles.cartItemContent}>
                <h4 className={styles.cartItemTitle}>{title}</h4>
                <AverageRating id={id} />

                <span className={styles.cartItemPrice}>${price}</span>
                <p className={styles.cartItemInfo}>{info}</p>
                <div className={styles.cartItemQuantity}>
                    <QuantityHandler
                        quantity={`${quantity}`}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                    />
                    <Button
                        className="removeFromCartBtn"
                        onClick={handleRemove}
                    >
                        Remove
                    </Button>
                </div>
            </div>
        </article>
    );
}

export default CartItem;
