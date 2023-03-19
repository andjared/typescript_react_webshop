import React from "react";
import Button from "../button/button";
import styles from "./quantityHandler.module.scss";

const QuantityHandler = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className={styles.quantityHandler}>
      <Button
        className="quantityHandlerBtn"
        content={"-"}
        handleClick={decreaseQuantity}
      />
      <input placeholder={quantity} className={styles.quantityHandlerInput} />
      <Button
        className="quantityHandlerBtn"
        content={"+"}
        handleClick={increaseQuantity}
      />
    </div>
  );
};

export default QuantityHandler;
