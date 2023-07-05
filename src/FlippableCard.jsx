import React, { useState } from 'react';
import styles from './_FlippableCard.module.scss';
import PlanetsCard from './components/PlanetsCards/PlanetsCards';
import { CSSTransition } from 'react-transition-group';
import flipTransitionStyles from './_FlippableCard.module.scss';

const FlippableCard = () => {
    const [showFront, setShowFront] = useState(true);
    return (
        <div className={styles['flippable-card-container']}>
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames={flipTransitionStyles['flip']}>

                <PlanetsCard onClick={() => {
                    setShowFront((v) => !v);
                }} />
            </CSSTransition>
        </div>
    );
}

export default FlippableCard;