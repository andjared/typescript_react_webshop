import React from "react";
import Button from "../button/button";
import styles from "./quantityHandler.module.scss";

const QuantityHandler = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.btn}
        content={"-"}
        handleClick={decreaseQuantity}
      />
      <input placeholder={quantity} />
      <Button
        className={styles.btn}
        content={"+"}
        handleClick={increaseQuantity}
      />
    </div>
  );
};

export default QuantityHandler;
