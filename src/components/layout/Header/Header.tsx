import React, { FC } from 'react';

import './style.scss';

interface IHeader {
    handleClick(): void
}

const Header:FC<IHeader> = ({handleClick}) => {
    return (
        <div className={'header__wrapper'}>
            <header className={'header__inner'}>
                <div className={'header__left'}>
                    <span className={'header__left__menu--button'} onClick={handleClick}>
                        <i className={'fas fa-bars'} />
                    </span>
                </div>
                <div>
                    b
                </div>
            </header>
        </div>
    )
}

export default Header;