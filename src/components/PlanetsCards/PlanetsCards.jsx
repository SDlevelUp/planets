
import PlanetsData from '../../data/PlanetsData.json';
import styles from './_PlanetsCards.module.scss';
import "./_FlipTransition.module.scss"
const PlanetsCard = ({ onClick }) => {
    return (
        <div className={styles['planet-card-container']}>
            {PlanetsData.map((planet) => (
                <div key={planet.name} className={styles['planet-card']} onClick={onClick}>
                    <div className={styles['planet-card-back']}>
                        <h2 className={styles['planet-card-title']}>{planet.name}</h2>
                        <p className={styles['planet-card-definition']}>{planet.definition}</p>
                        <p className={styles['planet-card-distance']}>Distance: {planet.distance}</p>
                        <p className={styles['planet-card-type']}>Type: {planet.type}</p>
                    </div>

                    <div className={styles['planet-card-front']}>
                        <img src={planet.imageUrl} alt={planet.name} className={styles['planet-card-image']} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlanetsCard;