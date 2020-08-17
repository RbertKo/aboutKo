import React, { FC } from 'react';

import Body from "./Body";

const BodyWrapper = ({ SideNav }: { SideNav: FC}) => {
    return (
        <Body SideNav={SideNav} />
    )
}

export default BodyWrapper;