import React from "react";
import Button from "../button/button";
import styles from "./quantityHandler.module.scss";

const QuantityHandler = ({ value }) => {
  return (
    <div className={styles.wrapper}>
      <Button className={styles.decrease} content={"-"} />
      <input value={value} />
      <Button className={styles.increase} content={"+"} />
    </div>
  );
};

export default QuantityHandler;
