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
    product.title.toLocaleLowerCase().includes(searchQuery)
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <SearchIcon size={28} />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearchQuery(e)}
        />
        <Button
          className={styles.closeBtn}
          content={<X size={28} />}
          handleClick={handleSearch}
        />
      </div>
      {filtered.length > 0 && searchQuery !== ""
        ? filtered.slice(0, 5).map((result) => {
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
          })
        : !filtered.length &&
          searchQuery !== "" && (
            <div className={styles.result}>
              No search results for <span>{searchQuery}</span>
            </div>
          )}
    </div>
  );
};

export default Search;
