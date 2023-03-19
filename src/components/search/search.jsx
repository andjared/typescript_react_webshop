import React, { useState } from "react";
import { Search as SearchIcon, X } from "react-feather";
import Button from "../button/button";
import { products } from "../../products";
import styles from "./search.module.scss";
import { Link } from "react-router-dom";

const Search = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const filtered = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div className={styles.search}>
      <div className={styles.searchInner}>
        <SearchIcon size={28} />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearchQuery(e)}
        />
        <Button
          className="searchCloseBtn"
          content={<X size={28} />}
          handleClick={handleSearch}
        />
      </div>
      {filtered.length > 0 && searchQuery !== ""
        ? filtered.slice(0, 5).map((result) => {
            const { title, id } = result;
            return (
              <div key={id} className={styles.searchResults}>
                <Button
                  className="searchResultBtn"
                  content={
                    <Link to={"/productDetails"} state={{ title }}>
                      {title}
                    </Link>
                  }
                  handleClick={handleSearch}
                />
              </div>
            );
          })
        : !filtered.length &&
          searchQuery !== "" && (
            <div className={styles.searchResults}>
              No search results for <span>{searchQuery}</span>
            </div>
          )}
    </div>
  );
};

export default Search;
