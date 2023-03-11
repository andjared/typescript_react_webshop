import React from "react";
import Button from "../button/button";
import QuantityHandler from "../quantityHandler/quantityHandler";
import styles from "./product.module.scss";

const Product = ({ data, isProductActive }) => {
  const { img, title, info, description } = data;
  return (
    <article className={styles.wrapper}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>{info}</p>
        <p className={isProductActive ? styles.description : styles.hidden}>
          {description}
        </p>
      </div>
      <div className={styles.btns}>
        <Button className={styles.addToCart} content={"Add to Cart"} />
        <QuantityHandler value={1} />
      </div>
    </article>
  );
};

export default Product;
