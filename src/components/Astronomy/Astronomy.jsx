import { useEffect, useRef, useState } from 'react';
import styles from './_Astronomy.module.scss';
import mars from '../../assets/mars.jpg';
import travel from '../../assets/travel.jpg';


const Astronomy = () => {
    const imageContainerRef = useRef(null);
    const [animateImages, setAnimateImages] = useState(false);

    const handleScroll = () => {
        if (imageContainerRef.current) {
            const rect = imageContainerRef.current.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0;
            setAnimateImages(isVisible);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={styles['astronomy-banner']}>
                <img src={mars} alt="bannière galerie" />
            </div>
            <section className={styles['astronomy-presentation']} ref={imageContainerRef}>
                <h1>L'Astronium</h1>
                <div className={`${styles['img-left']} ${animateImages ? styles['animate'] : ''}`}>
                    <img src={travel} alt="Astronaute dans l'espace" />
                    <p className={styles['p-presentation-solar-system']}>
                        Plongez au cœur des planètes, des lunes, des astéroïdes et des comètes qui composent
                        notre système solaire. Explorez les caractéristiques uniques de chaque planète, de Mercure
                        à Neptune, et découvrez des faits fascinants sur leur taille, leur composition et leurs
                        atmosphères. Apprenez également sur les lunes les plus intrigantes, comme la lune de Jupiter,
                        Europe, et la lune de Saturne, Titan. Plongez dans l'immensité du système solaire et laissez-vous
                        émerveiller par sa beauté et sa complexité.
                    </p>
                </div>
                <div className={`${styles['img-right']} ${animateImages ? styles['animate'] : ''}`}>
                    <img src={travel} alt="Astronaute dans l'espace" />
                    <p className={styles['p-presentation-quiz']}>
                        Mettez vos connaissances à l'épreuve et explorez l'univers à travers une série de questions captivantes.
                        Améliorez votre compréhension des planètes, des étoiles et des phénomènes célestes. Obtenez des résultats
                        instantanés et découvrez votre niveau de connaissances en astronomie. Plongez dans le monde fascinant de
                        l'astronomie avec le quiz interactif de la page "Astronomie". Amusez-vous et profitez de cette expérience éducative !
                    </p>
                </div>
                <div className={`${styles['img-left']} ${animateImages ? styles['animate'] : ''}`}>
                    <img src={travel} alt="Astronaute dans l'espace" />
                    <p className={styles['p-presentation-exploration']}>
                        Vivez une expérience immersive à travers une sélection captivante de vidéos sur l'exploration spatiale.
                        Plongez dans les missions historiques et actuelles qui ont permis à l'humanité de repousser les frontières de l'espace. Regardez des
                        vidéos époustouflantes des premiers pas de l'homme sur la Lune lors de la mission Apollo, revivez les moments forts des missions de
                        la navette spatiale, et découvrez les incroyables découvertes réalisées par les sondes spatiales qui ont exploré des planètes lointaines
                        et des comètes. Préparez-vous à être émerveillé par les images et les témoignages des astronautes qui ont vécu ces moments historiques
                        et laissez-vous inspirer par les avancées et les découvertes de l'exploration spatiale.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Astronomy;