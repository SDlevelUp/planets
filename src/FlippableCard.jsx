import React from 'react';
import styles from './_FlippableCard.module.scss';
import PlanetsCard from './components/PlanetsCards/PlanetsCards';

const FlippableCard = () => {
    return (
        <div className={styles['flippable-card-container']}>
            <PlanetsCard />
        </div>
    );
};

export default FlippableCard;