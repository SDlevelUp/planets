import styles from './_Astronomy.module.scss';
import mars from '../../assets/mars.jpg'
const Astronomy = () => {
    return (
        <>
            <div className={styles['astronomy-banner']}>
                <img src={mars} alt="bannière galerie" />
            </div>
            <div className={styles['astronomy-container']}>
                PARTIE ASTRONOMIE
            </div>
        </>
    )
}

export default Astronomy;
