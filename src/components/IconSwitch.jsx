import React from 'react';


export default function IconSwitch(props) {
    const { icon, onSwitch } = props;
    const switchIcon = (e) => {
        onSwitch(e.currentTarget.textContent); //передаём текущее значение
    }
    return (
        <div className='icon'>
            <span className="material-icons" onClick={ switchIcon }>{ icon }</span>
        </div>
    )
};
