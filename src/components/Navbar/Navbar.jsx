import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chevron from '../Chevron';
import SubMenu from '../SubMenu';
import styles from './_Navbar.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { menuItems } from '../../js/menuItems';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);

    const handleMobileMenuClick = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubmenuClick = (index) => {
        setActiveSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={`${styles.header} ${isMobileMenuOpen ? styles.active : ''} ${scrolled ? styles['header-bg'] : ''}`}>
            <Link to="/" className={styles.logo}>
                GALAXIE
            </Link>
            <ul className={`${styles['nav-menu']} ${isMobileMenuOpen ? styles.active : ''}`}>
                {menuItems.map((menu, index) => (
                    <li className={`${styles['menu-item']}`} key={index}>
                        {menu.submenu ? (
                            <div
                                className={`${styles['menu-link']} ${activeSubmenuIndex === index ? styles['active'] : ''}`}
                                onClick={() => handleSubmenuClick(index)}
                            >
                                {menu.title}
                                <Chevron
                                    isActive={activeSubmenuIndex === index}
                                    onClick={() => handleSubmenuClick(index)}
                                />
                                {activeSubmenuIndex === index && (
                                    <SubMenu isOpen={true} submenuItems={menu.submenu} />
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

