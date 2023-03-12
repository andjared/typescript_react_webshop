import React, { useContext } from "react";
import CartContext from "../../CartContext";
import QuantityHandler from "../quantityHandler/quantityHandler";
import Button from "../button/button";
import styles from "./cartItem.module.scss";

const CartItem = ({ data }) => {
  const { removeFromCart } = useContext(CartContext);
  const { id, img, title, info } = data;
  return (
    <article className={styles.item}>
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
            handleClick={() => removeFromCart(id)}
          />
        </div>
      </div>
    </article>
  );
};

export default CartItem;
