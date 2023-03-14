import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import Button from "../../components/button/button";
import CartItem from "../../components/cartItem/cartItem";
import { products } from "../../products";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cartItems, totalCartItemsAmount } = useContext(CartContext);
  console.log(totalCartItemsAmount());
  return (
    <section className={styles.cart}>
      {products
        .filter((product) => cartItems[product.id] !== 0)
        .map((product) => {
          return <CartItem data={product} key={product.id} />;
        })}
      {totalCartItemsAmount() > 0 ? (
        <div>
          <Button
            className={styles.payBtn}
            content={`Continue with payment for ${totalCartItemsAmount()} products`}
          />
        </div>
      ) : (
        <div className={styles.redirect}>
          Your cart is empty. Browse products <Link to="/">here</Link>.
        </div>
      )}
    </section>
  );
};

export default Cart;
