import React from 'react';


export default function IconSwitch(props) {
    const { icon, onSwitch } = props;
    const switchIcon = (e) => {
        onSwitch(e.currentTarget.textContent);
    }
    return (
        <div className='icon'>
            <span className="material-icons" onClick={ switchIcon }>{ icon === 'view_module' ? 'view_module' : 'view_list' }</span>
        </div>
    )
};
