import React from 'react';
import styles from "./_Landing.module.scss";

const Buttons = () => {
    const handleExploreClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles["hero-section-buttons"]}>
            <button type="button" title="Explore" onClick={handleExploreClick}>
                <span>Explorer</span>
            </button>

            <button type="button" title="About" className={styles["btn-bg"]}>
                <span>A propos</span>
            </button>
        </div>
    );
};

export default Buttons;