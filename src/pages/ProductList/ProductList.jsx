import React from "react";
import { products } from "../../products";
import Product from "./product";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  return (
    <section className={styles.productList}>
      <div className={styles.productListHeading}>
        <h2 className={styles.productListTitle}>The Special Collection</h2>
      </div>
      <div className={styles.productListGrid}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
