import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Product List</Link>
      {/* add cart icon  */}
      <Link to="cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
