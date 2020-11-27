import React, { useState } from 'react';
import { products  } from './products';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

export default function Store(props) {
    const { products } = props;
    const icons = ['view_list', 'view_module']
    let [state, setIcon] = useState(icons[0]);
    //здесть происходит магия, не понимаю как работает setFilter
    const onSwitch = (icon) => {
        console.log('some trash' + icon);
        //setIcon(state => state = icon);  
    }
    
    
    return (
        <div className="container">
            <IconSwitch
                icon = { state }
                onSwitch = { onSwitch }/>  
            <CardsView cards = { products }/>
            
        </div>
    )
};