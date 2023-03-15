import React, { useContext, useState } from "react";
import CartContext from "../../CartContext";
import Button from "../button/button";
import QuantityHandler from "../quantityHandler/quantityHandler";
import styles from "./product.module.scss";

const Product = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const { id, img, title, info } = data;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

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
          className="addToCart"
          content={"Add to Cart"}
          handleClick={() => addToCart(id, quantity)}
        />
        <QuantityHandler
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
    </article>
  );
};

export default Product;
