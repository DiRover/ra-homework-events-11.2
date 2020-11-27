import React from 'react';


export default function ShopCard(props) {
    const { card } = props;
    //console.log(card);
    return (
        <div className='item'>
            <img src={ card.img } className='item_img' alt='sneackers'/>
            <p className='item_name'>{ card.name }</p>
            <p className='item_color'>{ card.color }</p>
            <p className='item_price'>{ card.price }</p>
        </div>
    )
};
