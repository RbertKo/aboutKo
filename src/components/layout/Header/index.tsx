import React, { useContext } from 'react';
import Header from './Header';
import HeaderContext, {sideAction, sideActionType} from "../../../contexts/side";

const HeaderWrapper = () => {
    const [state, dispatch] = useContext(HeaderContext)

    const handleClick = () => {
        return dispatch ? dispatch({
            type: sideActionType.toggleSideNav
        }) : null
    }

    return (
        <Header handleClick={handleClick} {...state} />
    )
}

export default HeaderWrapper;