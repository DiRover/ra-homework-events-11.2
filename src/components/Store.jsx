import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

export default function Store(props) {
    const { products } = props;
    const icons = ['view_list', 'view_module']
    let [state, setIcon] = useState(icons[1]);
    const onSwitch = (pic) => {
        //стрелочная функция сразу возвращает значение в переменную state
        setIcon(state => icons.filter((o) => o !== pic)[0]);
    }
    
    return (
        <div className="container">
            <IconSwitch
                icon = { state }
                onSwitch = { onSwitch }/>
            <div>
                {/*тут устанавливается тот или иной способ отображения страницы*/}
            { state === icons[0] ? <ListView items = { products } /> : <CardsView cards = { products } /> }
            </div>
        </div>
    )
};