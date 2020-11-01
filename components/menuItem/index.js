import React from 'react';

const MenuItem = (props) => {
    return(
    <li><a href={props.to}>{props.menuTitle}</a></li>
    )
}

export default MenuItem;