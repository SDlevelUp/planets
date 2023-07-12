import React from 'react';
import styles from "./_Landing.module.scss";
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
    const navigate = useNavigate();

    const navigateToGallery = () => {
        navigate('/galerie');
    };

    return (
        <div className={styles["hero-section-buttons"]}>
            <button type="button" title="Gallery" onClick={navigateToGallery} >
                <span>Galerie</span>
            </button>

            <button type="button" title="About" className={styles["btn-bg"]}>
                <span>A propos</span>
            </button>
        </div>
    );
};

export default Buttons;