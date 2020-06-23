import React from 'react';

import Card from '../card/card';

import './card-list.styles.css';

function CardList({ monsters }) {
	return (
		<>
			<div className="card-list">
				{monsters && monsters.map(monster => <Card monster={monster} />)}
			</div>
		</>
	);
}

export default CardList;
