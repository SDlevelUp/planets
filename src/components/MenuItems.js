import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import styles from './_MenuItems.module.scss';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <li
            className={`${styles['menu-item']} ${dropdown ? styles['menu-item-active'] : ''}`}
        >
            {items.submenu ? (
                <div className={styles['menu-link']} onClick={handleDropdown}>
                    {items.title}
                    <FaChevronDown className={styles['menu-icon']} />
                    {dropdown && (
                        <ul className={styles['sub-menu']}>
                            {items.submenu.map((submenu, index) => (
                                <li key={index}>
                                    <Link to={submenu.path} className={styles['sub-menu-link']}>
                                        {submenu.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <Link to={items.path} className={styles['menu-link']}>
                    {items.title}
                </Link>
            )}
        </li>
    );
};

export default MenuItems;