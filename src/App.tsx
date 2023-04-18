import './styles/App.scss';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/productList';
import ProductDetails from './pages/ProductDetails/productDetails';
import Cart from './pages/Cart/cart';
import Header from './components/header/header';
import { CartContextProvider } from './context/CartContext';
import { IProduct } from './products';

const App = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch('http://localhost:3000/api/products');
				const products = await res.json();
				setProducts(products);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	return (
		<div className='App'>
			<CartContextProvider>
				<Header products={products} />
				<main>
					<Routes>
						<Route path='/' element={<ProductList products={products} />} />
						<Route
							path='/productDetails'
							element={<ProductDetails products={products} />}
						/>
						<Route path='/cart' element={<Cart products={products} />} />
					</Routes>
				</main>
			</CartContextProvider>
		</div>
	);
};

export default App;
