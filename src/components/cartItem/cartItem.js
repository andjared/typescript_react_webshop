import React, { useContext, useState } from "react";
import CartContext from "../../CartContext";
import QuantityHandler from "../quantityHandler/quantityHandler";
import Button from "../button/button";
import styles from "./cartItem.module.scss";

const CartItem = ({ data }) => {
  const { removeFromCart, getCartItemQuantity, addToCart } =
    useContext(CartContext);
  const { id, img, title, info } = data;
  const [quantity, setQuantity] = useState(getCartItemQuantity(id));

  const increaseQuantity = (id, quantity) => {
    setQuantity((prev) => prev + 1);
    //not getting updated state, fix
    addToCart(id, quantity);
  };

  const decreaseQuantity = (id, quantity) => {
    setQuantity((prev) => prev - 1);
    //not getting updated state, fix
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
            quantity={quantity}
            increaseQuantity={() => increaseQuantity(id, quantity)}
            decreaseQuantity={() => decreaseQuantity(id, quantity)}
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
