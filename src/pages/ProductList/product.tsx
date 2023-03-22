import React, { useContext, useState, FC } from "react";
import CartContext from "../../CartContext";
import Button from "../../components/button/button";
import QuantityHandler from "../../components/quantityHandler/quantityHandler";
import styles from "./product.module.scss";

interface ProductProps {
  product: {
    img: string,
    title: string,
    id: number,
    info: string,
  }
}

const Product: FC<ProductProps> = ({product: {id, img, title, info}}) => {
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
    <article className={styles.product}>
      <div className={styles.productImage}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productInfo}>{info}</p>
      </div>
      <div className={styles.productBtns}>
        <Button
          className="addToCartBtn"
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
