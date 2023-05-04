import React from 'react';
import Product from './product';
import styles from './productList.module.scss';

export interface Props {
    products: IProduct[];
}

function ProductList({ products }: Props) {
    return (
        <section className={styles.productList}>
            <div className={styles.productListHeading}>
                <h2 className={styles.productListTitle}>
                    The Special Collection
                </h2>
            </div>
            <div className={styles.productListGrid}>
                {products.map((product) => {
                    return <Product product={product} key={product.id} />;
                })}
            </div>
        </section>
    );
}

export default ProductList;
