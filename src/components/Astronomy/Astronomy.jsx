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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam accusantium nam repudiandae
                        laboriosam quia suscipit, voluptates totam, atque, numquam quae exercitationem a aperiam libero
                        similique quaerat? Explicabo, autem quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Vero veniam accusantium nam repudiandae laboriosam quia suscipit, voluptates totam, atque, numquam quae
                        exercitationem a aperiam libero similique quaerat? Explicabo, autem quas.
                    </p>
                </div>
                <div className={`${styles['img-right']} ${animateImages ? styles['animate'] : ''}`}>
                    <img src={travel} alt="Astronaute dans l'espace" />
                    <p className={styles['p-presentation-quiz']}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam accusantium nam repudiandae
                        laboriosam quia suscipit, voluptates totam, atque, numquam quae exercitationem a aperiam libero
                        similique quaerat? Explicabo, autem quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Vero veniam accusantium nam repudiandae laboriosam quia suscipit, voluptates totam, atque, numquam quae
                        exercitationem a aperiam libero similique quaerat? Explicabo, autem quas.
                    </p>
                </div>
                <div className={`${styles['img-left']} ${animateImages ? styles['animate'] : ''}`}>
                    <img src={travel} alt="Astronaute dans l'espace" />
                    <p className={styles['p-presentation-exploration']}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam accusantium nam repudiandae
                        laboriosam quia suscipit, voluptates totam, atque, numquam quae exercitationem a aperiam libero
                        similique quaerat? Explicabo, autem quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Vero veniam accusantium nam repudiandae laboriosam quia suscipit, voluptates totam, atque, numquam quae
                        exercitationem a aperiam libero similique quaerat? Explicabo, autem quas.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Astronomy;