import React from 'react';
import PlanetsData from '../../data/PlanetsData.json';
import styles from './_PlanetsCards.module.scss';

const PlanetsCard = ({ onClick }) => {
    return (
        <div className={styles['planet-card-container']}>
            {PlanetsData.map((planet) => {
                return (
                    <div key={planet.name} className={styles['planet-card']} onClick={onClick}>
                        <div className={styles['planet-card-back']}>
                            <img src={planet.imageUrl} alt={planet.name} className={styles['planet-card-image']} />
                        </div>

                        <div className={styles['planet-card-front']}>
                            <h2>{planet.name}</h2>
                            <p>{planet.definition}</p>
                            <p>Distance: {planet.distance}</p>
                            <p>Type: {planet.type}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PlanetsCard;