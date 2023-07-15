import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/Navbar/_Navbar.module.scss';

const SubMenu = ({ isOpen, submenuItems }) => {
    const submenuClasses = isOpen ? styles['sub-menu'] : `${styles['sub-menu']} ${styles.hidden}`;

    return (
        <ul className={submenuClasses}>
            {submenuItems.map((submenu, index) => (
                <li key={index}>
                    <Link to={submenu.path} className={styles['sub-menu-link']}>
                        {submenu.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SubMenu;