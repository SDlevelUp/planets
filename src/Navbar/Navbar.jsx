import React, { useState } from 'react';
import './Navbar.scss';
import { MdClose, MdDehaze } from 'react-icons/md';
import { MenuItems } from '../data/MenuItems';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const change = () => setClicked(!clicked);

    return (
        <nav className='navbar'>
            <p className='logo'>Planete</p>
            <div className='menuIcon' onClick={change}>
                {clicked ? <MdClose /> : <MdDehaze />}
            </div>
            <ul className={`menu-items ${clicked ? 'visible' : ''}`}>
                {MenuItems.map((item, index) => (
                    <li key={index} className={item.cName}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;