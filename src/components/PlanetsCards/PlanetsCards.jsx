import React from 'react';
import PlanetsData from '../../data/PlanetsData.json';
import styles from './_PlanetsCards.module.scss';

const PlanetsCard = () => {
    return (
        <div className={styles['planet-card-container']}>
            {PlanetsData.map((planet) => {
                return (
                    <div key={planet.name} className={styles['planet-card']}>
                        <img src={planet.imageUrl} alt={planet.name} />
                        <h2>{planet.name}</h2>
                        <p>{planet.definition}</p>
                        <p>Distance: {planet.distance}</p>
                        <p>Type: {planet.type}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default PlanetsCard;