import React from 'react';
import ShopItem from './ShopItem';

export default function ListView(props) {
    const { items } = props;
    return (
        <div>
            <ShopItem items = { items } />
        </div>
    )
};