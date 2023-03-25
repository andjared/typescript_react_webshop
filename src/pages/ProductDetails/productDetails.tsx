import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../../products";
import Button from "../../components/button/button";
import QuantityHandler from "../../components/quantityHandler/quantityHandler";
import {useCartContext} from "../../context/CartContext";
import styles from "./productDetails.module.scss";

const ProductDetails = () => {
  const { title } = useLocation().state;
  const product = products.find((product) => product.title === title);
  
  // const {img, id, title, info, description} = product;

  const { addToCart } = useCartContext();
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
    <section className={styles.productDetails}>
       <article className={styles.product}>
        <div className={styles.productImage}>
          <img src={product?.img} alt={title} />
        </div>
        <div className={styles.productContent}>
          <h3 className={styles.productTitle}>{product?.title}</h3>
          <div className={styles.productInfo}>{product?.info}</div>
          <div className={styles.productDescription}>{product?.description}</div>

          <div className={styles.productBtns}>
            <div>
              <QuantityHandler
                quantity={String(quantity)}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            </div>
            <Button
              className="addToCartBtn"
              content={"Add to Cart"}
              handleClick={() => addToCart(product?.id!, quantity)}
            />
          </div>
        </div>
      </article> 
    </section>
  );
};

export default ProductDetails;
