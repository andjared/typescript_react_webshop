import React from 'react';
import Product from './product';
import styles from './productList.module.scss';
import { Link } from 'react-router-dom';

export interface Props {
	products: Product[];
}

function ProductList({ products }: Props) {
	return (
		<section className={styles.productList}>
			<div className={styles.productListHeading}>
				<h2 className={styles.productListTitle}>The Special Collection</h2>
			</div>
			<div className={styles.productListGrid}>
				{products.map((product) => {
					const { title, id } = product;
					return (
						<Link to={'/productDetails'} state={{ title }} key={id}>
							<Product product={product} />
						</Link>
					);
				})}
			</div>
		</section>
	);
}

export default ProductList;
