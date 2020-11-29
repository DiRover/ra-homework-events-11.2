import React from 'react'

export default function ShopItem(props) {
    const { items } = props;
    return (
        items.map((item) => {
            return <div className='items' key={performance.now()}>
                        <img src={ item.img } className='item_img' alt='sneackers'/>
                        <p className='item item_name'>{ item.name }</p>
                        <p className='item item_color'>{ item.color }</p>
                        <p className='item item_price'>${ item.price }</p>
                        <p className='item item_button'>Add to card</p>
                    </div>
        })
    )
}