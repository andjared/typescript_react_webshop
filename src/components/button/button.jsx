import React from "react";
import styles from "./button.module.scss";

const Button = ({ className, content, handleClick }) => {
  return (
    <button className={styles[className]} onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
