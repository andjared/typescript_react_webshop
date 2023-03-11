import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/header/header";
import { CartContextProvider } from "./CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
