import React from "react";
import { products } from "../../products";
import Product from "../../components/product/product";
import styles from "./ProductList.module.scss";

const ProductList = ({ isProductActive }) => {
  // list of products, include img, title, short descr
  // abbility to add product in cart and to change number of product in cart
  //link to product details page
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>The Special Collection</h2>
      </div>{" "}
      <div className={styles.grid}>
        {products.map((product) => (
          <Product
            key={product.id}
            data={product}
            isProductActive={isProductActive}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
