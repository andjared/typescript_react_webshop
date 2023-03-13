import React, { useContext, useState } from "react";
import CartContext from "../../CartContext";
import QuantityHandler from "../quantityHandler/quantityHandler";
import Button from "../button/button";
import styles from "./cartItem.module.scss";

const CartItem = ({ data }) => {
  const { removeFromCart, getCartItemQuantity } = useContext(CartContext);
  const { id, img, title, info } = data;
  const [quantity, setQuantity] = useState(getCartItemQuantity(id));

  return (
    <article className={styles.item}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.content}>
        <h4 className={title}>{title}</h4>
        <p className={styles.info}>{info}</p>
        <div className={styles.btns}>
          <QuantityHandler quantity={quantity} setQuantity={setQuantity} />
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
