import styles from './_Astronomy.module.scss';
import mars from '../../assets/mars.jpg'
const Astronomy = () => {
    return (
        <>
            <div className={styles['astronomy-banner']}>
                <img src={mars} alt="bannière galerie" />
            </div>
            <div className={styles['astronomy-presentation']}>
                <h1>PARTIE ASTRONOMIE</h1>
                <p>
                    Dans cette partie, tu découvriras ou redécouvriras
                    des informations utiles sur les planètes du système
                    solaire que tu connais sûrement, telles que : Mars,
                    Vénus, Mercure, ... et celle où nous vivons, la Terre,
                    sous forme de cartes. Au passage de la souris, elles
                    s'animeront afin que tu puisses accéder aux informations
                    utiles pour chaque planète.
                    Essaies, et tu verras ! 👩‍🚀
                </p>
            </div>
        </>
    )
}

export default Astronomy;
