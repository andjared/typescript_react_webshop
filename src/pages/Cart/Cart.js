import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import Button from "../../components/button/button";
import QuantityHandler from "../../components/quantityHandler/quantityHandler";
import { products } from "../../products";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cartItems, removeFromCart, cartItemsAmount } =
    useContext(CartContext);

  return (
    <section className={styles.cart}>
      {products
        .filter((product) => cartItems[product.id] !== 0)
        .map((product) => {
          const { img, title, info } = product;
          return (
            <article key={product.id} className={styles.item}>
              <div className={styles.image}>
                <img src={img} alt={title} />
              </div>
              <div className={styles.content}>
                <h4 className={title}>{title}</h4>
                <p className={styles.info}>{info}</p>
                <div className={styles.btns}>
                  <QuantityHandler value={1} />
                  <Button
                    className={styles.remove}
                    content={"Remove"}
                    handleClick={() => removeFromCart(product.id)}
                  />
                </div>
              </div>
            </article>
          );
        })}
      {cartItemsAmount() > 0 ? (
        <Button className={styles.payBtn} content={"Continue with payment"} />
      ) : (
        <div className={styles.redirect}>
          Your cart is empty. Browse products <Link to="/">here</Link>.
        </div>
      )}
    </section>
  );
};

export default Cart;
