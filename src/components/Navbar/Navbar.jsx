import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import styles from './_Navbar.module.scss';
import { menuItems } from '../../menuItems';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

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

    const handleDropdown = (index) => {
        setMobileMenuOpen(false);
    };
    const handleSubmenuClick = (index) => {
        if (openSubmenu === index) {
            setOpenSubmenu(null);
        } else {
            setOpenSubmenu(index);
        }
    };

    return (
        <div className={`${styles.header} ${isMobileMenuOpen ? styles.active : ''} ${scrolled ? styles['header-bg'] : ''}`}>
            <Link to="/" className={styles.logo}>
                GALAXIE
            </Link>
            <ul className={`${styles['nav-menu']} ${isMobileMenuOpen ? styles.active : ''}`}>
                {menuItems.map((menu, index) => (
                    <li
                        className={`${styles['menu-item']} ${openSubmenu === index ? styles.active : ''}`}
                        key={index}
                    >
                        {menu.submenu ? (
                            <div className={styles['menu-link']} onClick={() => handleSubmenuClick(index)}>
                                {menu.title}
                                <FaChevronDown className={styles['menu-icon']} />
                                {openSubmenu === index && (
                                    <ul className={styles['sub-menu']}>
                                        {menu.submenu.map((submenu, subIndex) => (
                                            <li key={subIndex}>
                                                <Link to={submenu.path} className={styles['sub-menu-link']}>
                                                    {submenu.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Link to={menu.path} className={styles['menu-link']}>
                                {menu.title}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
            <div className={styles.hamburger} onClick={handleMobileMenuClick}>
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
        </div>
    );
};

export default Navbar;