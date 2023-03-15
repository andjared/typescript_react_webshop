import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../../products";
import Button from "../../components/button/button";
import QuantityHandler from "../../components/quantityHandler/quantityHandler";
import CartContext from "../../CartContext";
import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const { title } = useLocation().state;
  const product = products.find((product) => product.title === title);
  const { img, info, description, id } = product;
  const { addToCart } = useContext(CartContext);
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
    <section className={styles.page}>
      <article className={styles.product}>
        <div className={styles.image}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.info}>{info}</div>
          <div className={styles.description}>{description}</div>

          <div className={styles.btns}>
            <div className={styles.quantity}>
              <QuantityHandler
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            </div>

            <Button
              className="addToCart"
              content={"Add to Cart"}
              handleClick={() => addToCart(id, quantity)}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;
