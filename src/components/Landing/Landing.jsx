import styles from './_Landing.module.scss';
import galaxy from '../../assets/galaxynight.jpg';
import Buttons from './Buttons';

function Landing() {
    return (
        <div className={styles.hero}>
            <img src={galaxy} alt="Galaxy night" className={styles["hero-img"]} />
            <div className={styles["hero-section"]}>
                <h2 className={styles["hero-section-title"]}>un voyage infini</h2>
                <p className={styles["hero-section-description"]}>explorez l'univers et découvrez les merveilles des planètes.</p>
                <Buttons />
            </div>
        </div>
    )
}
export default Landing;