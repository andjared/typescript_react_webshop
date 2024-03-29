import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Button from '../../components/button/button';
import CartItem from './cartItem';
import styles from './cart.module.scss';

export interface Props {
    products: IProduct[];
}

function Cart({ products }: Props) {
    const { cartItems } = useCartContext();

    const items: IProduct[] = useMemo(() => {
        return products.filter((product) => Boolean(cartItems[product.id]));
    }, [products, cartItems]);

    const calculatePrice = (): number => {
        //extract price for each item based on amount in cart and then calculate sum
        const total = items
            .map(({ price, id }) => Number(price) * cartItems[id])
            .reduce((acc, curr) => acc + curr, 0);

        return total;
    };

    const totalPrice = useMemo(() => calculatePrice(), [items]);

    if (!items.length)
        return (
            <section className={styles.cart}>
                <div className={styles.cartRedirect}>
                    Your cart is empty. Browse products <Link to="/">here</Link>
                    .
                </div>
            </section>
        );

    return (
        <section className={styles.cart}>
            {items.map((product) => {
                return <CartItem product={product} key={product.id} />;
            })}
            <Button className="cartPaymentBtn">
                <span>Checkout</span>
                <span className={styles.separatorDot}></span>
                <span>${totalPrice}</span>
            </Button>
        </section>
    );
}

export default Cart;
