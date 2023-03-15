import React, { useContext } from "react";
import CartContext from "../../CartContext";
import QuantityHandler from "../quantityHandler/quantityHandler";
import Button from "../button/button";
import styles from "./cartItem.module.scss";

const CartItem = ({ data }) => {
  const { removeFromCart, getCartItemQuantity, addToCart } =
    useContext(CartContext);
  const { id, img, title, info } = data;

  const increaseQuantity = (id) => {
    const quantity = getCartItemQuantity(id) + 1;
    addToCart(id, quantity);
  };

  const decreaseQuantity = (id) => {
    const quantity = getCartItemQuantity(id) - 1;
    removeFromCart(id, quantity);
  };

  return (
    <article className={styles.item}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.content}>
        <h4 className={title}>{title}</h4>
        <p className={styles.info}>{info}</p>
        <div className={styles.btns}>
          <QuantityHandler
            quantity={getCartItemQuantity(id)}
            increaseQuantity={() => increaseQuantity(id)}
            decreaseQuantity={() => decreaseQuantity(id)}
          />
          <Button
            className={styles.remove}
            content={"Remove"}
            handleClick={() => removeFromCart(id, 0)}
          />
        </div>
      </div>
    </article>
  );
};

export default CartItem;
