import styles from "./_Landing.module.scss";

const Buttons = () => {
    return (
        <div className={styles["hero-section-buttons"]}>
            <button type="button" title="Explore">
                <span>Explorer</span>
            </button>

            <button type="button" title="About" className={styles["btn-bg"]}>
                <span>A propos</span>
            </button>
        </div>
    )
}

export default Buttons;