import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Header from "./components/header/header";
import { CartContextProvider } from "./CartContext";

function App() {
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
