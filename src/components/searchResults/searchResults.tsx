import React from 'react';
import { Link } from 'react-router-dom';
import styles from './searchResults.module.scss';

export interface Props {
    filtered: IProduct[];
    searchQuery: string;
    handleSearch: () => void;
}

export default function SearchResults({
    filtered,
    searchQuery,
    handleSearch,
}: Props) {
    if (!filtered.length)
        return (
            <div className={styles.results}>
                No search results for <span>{searchQuery}</span>
            </div>
        );

    return (
        <div className={styles.results}>
            {filtered.slice(0, 5).map(({ id, title }) => {
                return (
                    <div key={id} className={styles.result}>
                        <span className={styles.link} onClick={handleSearch}>
                            <Link
                                to={'/productDetails'}
                                state={{
                                    title,
                                }}
                            >
                                {title}
                            </Link>
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
