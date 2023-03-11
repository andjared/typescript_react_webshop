import React, { useContext } from "react";
import CartContext from "../../CartContext";
import Button from "../button/button";
import QuantityHandler from "../quantityHandler/quantityHandler";
import styles from "./product.module.scss";

const Product = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const { id, img, title, info } = data;

  return (
    <article className={styles.product}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>{info}</p>
      </div>
      <div className={styles.btns}>
        <Button
          className={styles.addToCart}
          //add cart item amount
          content={"Add to Cart"}
          handleClick={() => addToCart(id)}
        />
        <QuantityHandler value={1} />
      </div>
    </article>
  );
};

export default Product;
