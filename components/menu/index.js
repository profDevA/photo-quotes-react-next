import React, { useState } from 'react';
import MenuItem from '../../components/menuItem';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([
        { to: 'authors.html', menuTitle: 'Authors' },
        { to: 'topics.html', menuTitle: 'Topics' },
        { to: 'one-quote.html', menuTitle: 'Quote of the Day' },
        { to: 'one-photo-quote.html', menuTitle: 'Photo Quotes' },
        { to: 'blog.html', menuTitle: 'Blog' },
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