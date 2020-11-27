import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView(props) {
    const { cards } = props; 
    //console.log(props);
    return (
        cards.map((card) => {
            return <ShopCard card = { card } key={performance.now()} />
        })
    )
};