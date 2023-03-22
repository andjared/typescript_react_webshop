import React, { useContext, FC } from "react";
import CartContext from "../../CartContext";
import QuantityHandler from "../../components/quantityHandler/quantityHandler";
import Button from "../../components/button/button";
import styles from "./cartItem.module.scss";

interface cartItemProps {
    product: {
    img: string,
    title: string,
    id: number,
    info: string,
  }
}

const CartItem: FC<cartItemProps> = ({product: { id, img, title, info }}) => {
  const { removeFromCart, getCartItemQuantity, addToCart } =
    useContext(CartContext);

  const increaseQuantity = (id: number) => {
    const quantity = getCartItemQuantity(id) + 1;
    addToCart(id, quantity);
  };

  const decreaseQuantity = (id: number) => {
    const quantity = getCartItemQuantity(id) - 1;
    removeFromCart(id, quantity);
  };

  return (
    <article className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.cartItemContent}>
        <h4 className={title}>{title}</h4>
        <p className={styles.cartItemInfo}>{info}</p>
        <div className={styles.cartItemQuantity}>
          <QuantityHandler
            quantity={getCartItemQuantity(id)}
            increaseQuantity={() => increaseQuantity(id)}
            decreaseQuantity={() => decreaseQuantity(id)}
          />
          <Button
            className="removeFromCartBtn"
            content={"Remove"}
            handleClick={() => removeFromCart(id, 0)}
          />
        </div>
      </div>
    </article>
  );
};

export default CartItem;
