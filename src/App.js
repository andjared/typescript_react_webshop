import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Header from "./components/header/header";
import { CartContextProvider } from "./CartContext";

function App() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div className="App">
      <CartContextProvider>
        <Header
          isSearchActive={isSearchActive}
          setIsSearchActive={setIsSearchActive}
        />
        <main className={isSearchActive ? "blured" : "main"}>
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
