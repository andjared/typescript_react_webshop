import React from "react";
import Button from "../button/button";
import styles from "./quantityHandler.module.scss";

const QuantityHandler = ({ value }) => {
  return (
    <div className={styles.wrapper}>
      <Button className={styles.btn} content={"-"} />
      <input placeholder={value} />
      <Button className={styles.btn} content={"+"} />
    </div>
  );
};

export default QuantityHandler;
