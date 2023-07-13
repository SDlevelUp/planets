import React from 'react';
import PlanetsData from '../../data/PlanetsData.json';
import styles from './_PlanetsCards.module.scss';
import './_FlipTransition.module.scss';
import astronaut from '../../assets/astronaut.jpg';

const PlanetCard = ({ planet, onClick }) => {
    return (
        <div key={planet.name} className={styles['planet-card']} onClick={onClick}>
            <div className={styles['planet-card-back']}>
                <div className={styles['planet-card-content']}>
                    <h2 className={styles['planet-card-title']}>{planet.name}</h2>
                    <p className={styles['planet-card-definition']}>{planet.definition}</p>
                    <p className={styles['planet-card-distance']}>Distance au soleil : {planet.distance}</p>
                    <p className={styles['planet-card-type']}>
                        Type:{" "}
                        {planet.type === 'Rocheuse' || planet.type === 'Gazeuse' ? (
                            <span className={styles.italic}>{planet.type}</span>
                        ) : (
                            planet.type
                        )}
                    </p>
                    <span className={styles['planet-card-asterix']}>
                        <em>
                            <strong>*ua (unité astronomique)</strong>
                        </em>{" "}
                        : est l'unité de mesure correspondant à la distance moyenne qui sépare la Terre du Soleil, soit environ 150
                        millions de km (exactement 149 597 870,7 km).
                    </span>
                </div>
            </div>
            <div className={styles['planet-card-front']}>
                <img src={planet.imageUrl} alt={planet.name} className={styles['planet-card-image']} />
            </div>
        </div>
    );
};

const PlanetsCard = ({ onClick }) => {
    return (
        <>
            <div className={styles['gallery-banner']}>
                <img src={astronaut} alt="bannière galerie" />
            </div>
            <div className={styles['planet-card-presentation']}>
                <h1>PlanetaryPix</h1>
                <p className={styles['p-presentation']}>
                    Bienvenue dans l'aventure, jeune explorateur !
                </p>
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
            <div className={styles['planet-card-container']}>
                {PlanetsData.map((planet) => (
                    <PlanetCard key={planet.name} planet={planet} onClick={onClick} />
                ))}
            </div>
        </>
    );
};

export default PlanetsCard;