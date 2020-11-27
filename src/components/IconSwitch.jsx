import React from 'react';


export default function IconSwitch(props) {
    const { icon } = props;
    const iconList = './img/view_list_big.png';
    const iconModule = './img/view_module_big.png';
    return (
        <div className='icon'>
            <img src={ icon  === 'view_list' ? iconList : iconModule } alt='icon'/>
        </div>
    )
};
