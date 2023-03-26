import React, {  useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, Search as SearchIcon } from "react-feather";
import Button from "../button/button";
import Search from "../search/search";
import styles from "./header.module.scss";

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const { totalCartItemsAmount} = useCartContext();
  const total = totalCartItemsAmount();

  const handleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerAnnouncment}>Free world wide shipping</div>
      <nav className={styles.headerNavbar}>
        <div className={styles.navbarMenu}>
          <Menu size={28} />
        </div>
        <div className={styles.navbarTitle}>
          <Link to="/">Jewelry Store</Link>
        </div>
        <div className={styles.navbarIcons}>
          <Button
            className="navbarSearchBtn"
            content={<SearchIcon size={28} />}
            handleClick={handleSearch}
          />
          <div className={styles.navbarCartIcon}>
            {total > 0 && (
              <div className={styles.cartTotal}>
                <span className={styles.cartTotalValue}>{total}</span>
              </div>
            )}
            <Link to="/cart">
              <ShoppingBag size={28} />
            </Link>
          </div>
        </div>
      </nav>
      {isSearchActive && <Search handleSearch={handleSearch} />}
    </header>
  );
};

export default Header;
