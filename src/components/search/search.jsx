import React from "react";
import { Search as SearchIcon, X } from "react-feather";
import Button from "../button/button";

import styles from "./search.module.scss";

const Search = ({ handleSearch }) => {
  const handleFilter = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <SearchIcon size={28} />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleFilter(e)}
        />
        <Button
          className={styles.closeBtn}
          content={<X size={28} />}
          handleClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
