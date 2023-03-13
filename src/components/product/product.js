import React, { useContext, useState } from "react";
import CartContext from "../../CartContext";
import Button from "../button/button";
import QuantityHandler from "../quantityHandler/quantityHandler";
import styles from "./product.module.scss";

const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
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
          content={"Add to Cart"}
          handleClick={() => addToCart(id, quantity)}
        />
        <QuantityHandler quantity={quantity} setQuantity={setQuantity} />
      </div>
    </article>
  );
};

export default Product;
