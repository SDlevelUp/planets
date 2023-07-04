import React, { useState, useEffect } from 'react';
import styles from './_Navbar.module.scss';
import { MdClose, MdDehaze } from 'react-icons/md';
import { MenuItems } from '../../data/MenuItems';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const change = () => setClicked(!clicked);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <p className={styles.logo}>Planete</p>
            <div className={styles.menuIcon} onClick={change}>
                {clicked ? <MdClose /> : <MdDehaze />}
            </div>
            <ul className={`${styles['menu-items']} ${clicked ? styles.visible : ''}`}>
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