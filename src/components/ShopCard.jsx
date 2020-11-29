import React from 'react';

export default function ShopCard(props) {
    const { cards } = props;
    return (
        cards.map((card) => {
            return <div className='card_box' key={performance.now()}>
                            <p className='card card_name'>{ card.name }</p>
                            <p className='card card_color'>{ card.color }</p>
                            <img src={ card.img } className='card_img' alt='sneackers'/>
                            <div className='card_bottom'>
                                <p className='card card_price'>${ card.price }</p>
                                <p className='card card_button'>Add to card</p>
                            </div>
                    </div>
        })
    )
};
