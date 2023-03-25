import "./styles/App.scss";
import React, {  FC } from "react";

import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/productList";
import ProductDetails from "./pages/ProductDetails/productDetails";
import Cart from "./pages/Cart/cart";
import Header from "./components/header/header";
import { CartContextProvider } from "./context/CartContext";

const App: FC = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </CartContextProvider>
    </div>
  );
}

export default App;
