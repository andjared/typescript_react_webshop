import React from "react";
import Button from "../button/button";
import styles from "./quantityHandler.module.scss";

const QuantityHandler = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

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
