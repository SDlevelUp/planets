import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './_Navbar.module.scss';

import MenuItems from '../MenuItems';
import { menuItems } from '../../menuItems';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleMobileMenuClick = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

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
        <div className={`${styles.header} ${isMobileMenuOpen ? styles.active : ''} ${scrolled ? styles['header-bg'] : ''}`}>
            <Link to="/" className={styles.logo}>
                GALAXIE
            </Link>
            <ul className={`${styles['nav-menu']} ${isMobileMenuOpen ? styles.active : ''}`}>
                {menuItems.map((menu, index) => (
                    <MenuItems items={menu} key={index} />
                ))}
            </ul>
            <div className={styles.hamburger} onClick={handleMobileMenuClick}>
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
        </div>
    );
};

export default Navbar;