import React, {FC} from "react";
import Button from "../button/button";
import styles from "./quantityHandler.module.scss";

type QuantityHandlerProps = {
  quantity: string,
  increaseQuantity: (arg: number) => void,
  decreaseQuantity: (arg: number) => void,

}

const QuantityHandler: FC<QuantityHandlerProps> = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className={styles.quantityHandler}>
      <Button
        className="quantityHandlerBtn"
        content="-"
        handleClick={decreaseQuantity}
      />
      <input placeholder={quantity} className={styles.quantityHandlerInput} />
      <Button
        className="quantityHandlerBtn"
        content="+"
        handleClick={increaseQuantity}
      />
    </div>
  );
};

export default QuantityHandler;
