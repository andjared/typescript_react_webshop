import React, { useState } from "react";
import { Search as SearchIcon, X } from "react-feather";
import Button from "../button/button";
import { products } from "../../products";
import styles from "./search.module.scss";
import { Link } from "react-router-dom";

const Search = ({ handleSearch }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleFilter = (e) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filtered);
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
      {searchResults.length > 0 &&
        searchResults.map((result) => {
          const { title, id } = result;
          return (
            <div key={id} className={styles.results}>
              <Button
                className={styles.result}
                content={
                  <Link to={"/productDetails"} state={{ title }}>
                    {title}
                  </Link>
                }
                handleClick={handleSearch}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Search;
