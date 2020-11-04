import React, { useState } from 'react';
import MenuItem from '../../components/menuItem';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([
        { to: '/authors', menuTitle: 'Authors' },
        { to: '/topics', menuTitle: 'Topics' },
        { to: '/one-quote', menuTitle: 'Quote of the Day' },
        { to: '/one-photo-quote', menuTitle: 'Photo Quotes' },
        { to: '/blogs', menuTitle: 'Blog' },
    ]);
    const [activeItemNum, setActiveItemNum] = useState(4);

    const highLightMenu = () => {

    }
    return (
        <nav className="nav-links">
            <ul>
                {
                    menuItems.map((menuItem, index) => <MenuItem key={index} to={menuItem.to} menuTitle={menuItem.menuTitle} />)
                }
                <div className='active-nav'></div>
            </ul>
        </nav>
    )
}

export default Menu;