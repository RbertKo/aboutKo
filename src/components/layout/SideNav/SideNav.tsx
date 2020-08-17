import React, { FC } from 'react';

import './style.scss';

interface PresentationHeaderInterface {
    handleClick: () => void,
    isSpreaded: boolean
}

const SideNav:FC<PresentationHeaderInterface> = () => {
    return (
        <div className={'side_nav__wrapper'}>
            <aside className={'side_nav__inner'}>
                side
            </aside>
        </div>
    )
}

export default SideNav;