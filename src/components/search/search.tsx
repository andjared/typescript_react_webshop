import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'react-feather';
import Button from '../button/button';
import SearchResults from '../searchResults/searchResults';
import styles from './search.module.scss';

export interface Props {
    handleSearch: () => void;
    products: IProduct[];
}

function Search({ handleSearch, products }: Props) {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filtered: IProduct[] = products.filter((product) =>
        product.title
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
    );

    return (
        <div className={styles.search}>
            <div className={styles.searchInner}>
                <SearchIcon size={28} />
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearchQuery}
                />
                <Button className="searchCloseBtn" onClick={handleSearch}>
                    <X size={28} />
                </Button>
            </div>
            {searchQuery && (
                <SearchResults
                    filtered={filtered}
                    searchQuery={searchQuery}
                    handleSearch={handleSearch}
                />
            )}
        </div>
    );
}

export default Search;
