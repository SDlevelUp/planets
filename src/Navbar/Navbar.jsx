import React from 'react';
import './Navbar.scss';
import { MdClose, MdDehaze } from 'react-icons/md';
import { MenuItems } from '../data/MenuItems';
import { useState } from 'react';

const Navbar = () => {

    let [clicked, setClicked] = useState(false);
    const change = () => setClicked(!clicked)

    return (
        <nav className='navbar'>
            <p className='logo'>Planete</p>
            <div className="menuIcon">
                {clicked ? <MdClose onClick={change} /> : <MdDehaze onClick={change} />}
            </div>
            <ul className={`menu-items ${clicked ? "visible" : ''}`}>
                {MenuItems.map((item, index) => (
                    <li key={index} className={item.cName}>{item.title}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;