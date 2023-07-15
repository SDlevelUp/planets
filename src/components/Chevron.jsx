import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../components/Navbar/_Navbar.module.scss';

const Chevron = ({ isActive, onClick }) => {
    const chevronClasses = isActive ? `${styles['menu-icon']} ${styles.open}` : styles['menu-icon'];

    return (
        <FaChevronDown className={chevronClasses} onClick={onClick} />
    );
};

export default Chevron;