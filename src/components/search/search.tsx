import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, X } from 'react-feather';
import Button from '../button/button';
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
					type='text'
					placeholder='Search...'
					onChange={(e) => handleSearchQuery(e)}
				/>
				<Button className='searchCloseBtn' onClick={handleSearch}>
					<X size={28} />
				</Button>
			</div>
			{filtered.length > 0 && searchQuery !== ''
				? filtered.slice(0, 5).map((result) => {
						const { title, id } = result;
						return (
							<div key={id} className={styles.searchResults}>
								<Button
									className='searchResultBtn'
									onClick={handleSearch}
								>
									<Link
										to={'/productDetails'}
										state={{ title }}
									>
										{title}
									</Link>
								</Button>
							</div>
						);
				  })
				: !filtered.length &&
				  searchQuery !== '' && (
						<div className={styles.searchResults}>
							No search results for <span>{searchQuery}</span>
						</div>
				  )}
		</div>
	);
}

export default Search;
