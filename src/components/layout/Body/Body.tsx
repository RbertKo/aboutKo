import React, { FC } from 'react';

import './style.scss'

const Body = ({ SideNav }: { SideNav: FC }) => {
    return (
        <div className={'body__wrapper'}>
            <SideNav />
            <div className={'body__inner'}>
                body
            </div>
        </div>
    )
}

export default Body