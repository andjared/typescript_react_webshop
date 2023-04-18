import React from 'react';
import Product from './product';
import styles from './productList.module.scss';
import { IProduct } from '../../products';

export interface Props {
	products: IProduct[];
}

function ProductList({ products }: Props) {
	console.log(products);
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
}

export default ProductList;
