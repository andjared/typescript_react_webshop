import React, { useEffect } from "react";
import { products } from "../../products";
import Product from "../../components/product/product";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>The Special Collection</h2>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
