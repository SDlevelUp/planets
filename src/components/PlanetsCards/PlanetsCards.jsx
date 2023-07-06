import React from 'react';
import PlanetsData from '../../data/PlanetsData.json';
import styles from './_PlanetsCards.module.scss';
import './_FlipTransition.module.scss';
import { PiPlanetLight } from 'react-icons/pi';

const PlanetsCard = ({ onClick }) => {
    return (
        <div className={styles['planet-card-container']}>
            {PlanetsData.map((planet) => (
                <div key={planet.name} className={styles['planet-card']} onClick={onClick}>
                    <div className={styles['planet-card-back']}>
                        <div className={styles['icon-card']}>
                            <PiPlanetLight size={80} />
                        </div>
                        <div className={styles['planet-card-content']}>
                            <h2 className={styles['planet-card-title']}>{planet.name}</h2>
                            <p className={styles['planet-card-definition']}>{planet.definition}</p>
                            <p className={styles['planet-card-distance']}>Distance: {planet.distance}</p>
                            <p className={styles['planet-card-type']}>
                                Type:{" "}
                                {planet.type === 'Rocheuse' || planet.type === 'Gazeuse' ? (
                                    <span className={styles.italic}>{planet.type}</span>
                                ) : (
                                    planet.type
                                )}
                            </p>
                            <span className={styles['planet-card-asterix']}>
                                <em><strong>* ua (unité astronomique)</strong></em> : est l'unité de mesure correspondant à la distance moyenne qui sépare
                                la Terre du Soleil, soit environ 150 millions de km (exactement 149 597 870,7 km).
                            </span>
                        </div>
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