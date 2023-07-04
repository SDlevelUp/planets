import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './_Navbar.module.scss';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);

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
        <div className={`${styles.header} ${scrolled ? styles['header-bg'] : ''}`}>
            <Link to="/" className={styles.logo}>
                GALAX²IE
            </Link>
            <ul className={`${styles['nav-menu']} ${click ? styles.active : ''}`}>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/pricing">Galerie</Link>
                </li>
                <li>
                    <Link to="/training">Astronomiet</Link>
                </li>
                <li>
                    <Link to="/training">Contact</Link>
                </li>

            </ul>
            <div className={styles.hamburger} onClick={handleClick}>
                {click ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
        </div>
    );
};

export default Navbar;