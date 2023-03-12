import React, { useContext } from "react";
import CartContext from "../../CartContext";
import Button from "../../components/button/button";
import QuantityHandler from "../../components/quantityHandler/quantityHandler";
import { products } from "../../products";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <section className={styles.cart}>
      {/* if no items in cart return "no items in cart" */}
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
      <Button className={styles.payBtn} content={"Continue with payment"} />
    </section>
  );
};

export default Cart;
