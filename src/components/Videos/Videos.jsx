import React from 'react';
import styles from './_Videos.module.scss';

const Videos = () => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.titleContainer}>
                    <h1>Videos</h1>
                </div>
                <div className={styles.presentation}>
                    <p>
                        Explorez l'univers et découvrez les merveilles des planètes à travers des vidéos
                        fascinantes et des articles captivants. Plongez dans un voyage époustouflant à travers
                        les différentes planètes de notre système solaire, des géantes gazeuses aux petites planètes rocheuses,
                        et découvrez leurs caractéristiques uniques et mystérieuses.
                    </p>
                    <br />
                    <p>
                        Notre collection de vidéos vous offre une opportunité exceptionnelle d'admirer la beauté
                        des cieux étoilés et d'explorer les phénomènes célestes les plus fascinants. Apprenez-en davantage
                        sur les dernières découvertes scientifiques et les missions spatiales audacieuses qui ont révolutionné
                        notre compréhension de l'espace et de l'univers.
                    </p>
                    <br />
                    <p>
                        Que vous soyez un passionné d'astronomie ou simplement curieux d'en savoir plus sur les
                        mystères de l'espace, notre sélection de vidéos vous transportera aux confins de l'univers
                        pour une expérience inoubliable et enrichissante.
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Videos;