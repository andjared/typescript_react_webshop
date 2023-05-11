import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/productList';
import ProductDetails from './pages/ProductDetails/productDetails';
import Cart from './pages/Cart/cart';
import Header from './components/header/header';
import { CartContextProvider } from './context/CartContext';
import useFetch from './useFetch';
import './styles/App.scss';

const App = () => {
    const products = useFetch<IProduct[]>('http://localhost:3000/api/products');

    return (
        <div className="App">
            {products && (
                <CartContextProvider>
                    <Header products={products} />
                    <main>
                        <Routes>
                            <Route
                                path="/"
                                element={<ProductList products={products} />}
                            />
                            <Route
                                path="/productDetails"
                                element={<ProductDetails products={products} />}
                            />
                            <Route
                                path="/cart"
                                element={<Cart products={products} />}
                            />
                        </Routes>
                    </main>
                </CartContextProvider>
            )}
        </div>
    );
};

export default App;
