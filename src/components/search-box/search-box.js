import React from 'react';

import './search-box.styles.css';

function SearchBox({ searchField, onSearchChange }) {
	return (
		<>
			<input
				className="search"
				placeholder="search"
				type="search"
				value={searchField}
				onChange={onSearchChange}></input>
		</>
	);
}

export default SearchBox;
