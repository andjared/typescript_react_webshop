import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, Search as SearchIcon } from "react-feather";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.announcment}>
        Free world wide shipping only today
      </div>
      <nav>
        <div className={styles.menu}>
          <Menu size={28} />
        </div>
        <div className={styles.heading}>
          <Link to="/">Jewelry Store</Link>
        </div>
        <div className={styles.icons}>
          <button className={styles.search}>
            <SearchIcon size={28} />
          </button>
          <Link to="/cart">
            <ShoppingBag size={28} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
