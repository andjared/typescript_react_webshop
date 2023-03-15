import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, Search as SearchIcon } from "react-feather";
import CartContext from "../../CartContext";
import Button from "../button/button";
import Search from "../search/search";
import styles from "./header.module.scss";

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const { totalCartItemsAmount } = useContext(CartContext);
  const total = totalCartItemsAmount();

  const handleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.announcment}>Free world wide shipping</div>
      <nav className={styles.navbar}>
        <div className={styles.menu}>
          <Menu size={28} />
        </div>
        <div className={styles.heading}>
          <Link to="/">Jewelry Store</Link>
        </div>
        <div className={styles.icons}>
          <Button
            className={styles.search}
            content={<SearchIcon size={28} />}
            handleClick={handleSearch}
          />
          <div className={styles.cart}>
            {total > 0 && (
              <div className={styles.total}>
                <span className={styles.value}>{total}</span>
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
