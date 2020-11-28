import React, { useState } from 'react';
import { products  } from './products';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

export default function Store(props) {
    const { products } = props;
    const icons = ['view_list', 'view_module']
    let [state, setIcon] = useState('view_list');
    const onSwitch = (pic) => {
        setIcon(state => {
            state = icons.filter((o) => o !== pic)[0];
            console.log(state);
        });
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