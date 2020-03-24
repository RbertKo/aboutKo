import React, {FC, useContext} from 'react';
import HeaderContext, {IHeaderContext, sideActionType, sideState} from "../../../reducers/side";

import './style.scss';

const Header:FC = () => {
    const [state, dispatch]: IHeaderContext = useContext(HeaderContext)

    console.log({state})

    return (
        <div className={'header__wrapper'}>
            <header className={'header__inner'}>
                <div className={'header__left'}>
                    <span className={'header__left__menu--button'} onClick={() => dispatch ? dispatch({
                        type: sideActionType.toggleSideNav
                    }) : null}>
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