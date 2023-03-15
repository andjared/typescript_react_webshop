import React, { useContext, useState } from "react";
import CartContext from "../../CartContext";
import Button from "../../components/button/button";
import QuantityHandler from "../../components/quantityHandler/quantityHandler";
import styles from "./product.module.scss";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, img, title, info } = product;
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
