import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

function App() {
	const [monsters, setMonsters] = useState(null);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setMonsters(users));
	}, []);

	function onSearchChange(event) {
		setSearchField(event.target.value);
	}

	return (
		<div className="App">
			<h1>Monsters Rolodex</h1>
			<SearchBox searchField={searchField} onSearchChange={onSearchChange} />
			{monsters && (
				<CardList
					monsters={monsters.filter(monster =>
						monster.name.toLowerCase().includes(searchField.toLowerCase())
					)}
				/>
			)}
		</div>
	);
}

export default App;
