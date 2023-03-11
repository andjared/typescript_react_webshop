import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/header/header";
import { useState } from "react";

function App() {
  //set to show details on productDetailsPage only
  const [isProductActive, setIsProductActive] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ProductList isProductActive={isProductActive} />}
        />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
