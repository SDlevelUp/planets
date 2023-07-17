import styles from './_Astronomy.module.scss';
import mars from '../../assets/mars.jpg';
import travel from '../../assets/travel.jpg';

const Astronomy = () => {
    return (
        <>
            <div className={styles['astronomy-banner']}>
                <img src={mars} alt="bannière galerie" />
            </div>
            <section className={styles['astronomy-presentation']}>
                <h1>L'Astronium</h1>
                <div className={`${styles['img-left']}`}>
                    <img src={travel} alt="Astronaute dans l'espace" />
                    <p className={styles['p-presentation-solar-system']}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam accusantium
                        nam repudiandae laboriosam quia suscipit, voluptates totam, atque, numquam quae
                        exercitationem a aperiam libero similique quaerat? Explicabo, autem quas.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam accusantium
                        nam repudiandae laboriosam quia suscipit, voluptates totam, atque, numquam quae
                        exercitationem a aperiam libero similique quaerat? Explicabo, autem quas.
                    </p>
                </div>
                <div className={`${styles['img-right']}`}>
                    <img src={travel} alt="Astronaute dans l'espace" />
                    <p className={styles['p-presentation-quiz']}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam accusantium
                        nam repudiandae laboriosam quia suscipit, voluptates totam, atque, numquam quae
                        exercitationem a aperiam libero similique quaerat? Explicabo, autem quas.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam accusantium
                        nam repudiandae laboriosam quia suscipit, voluptates totam, atque, numquam quae
                        exercitationem a aperiam libero similique quaerat? Explicabo, autem quas.
                    </p>
                </div>
                <div className={`${styles['img-left']}`}>
                    <img src={travel} alt="Astronaute dans l'espace" />
                    <p className={styles['p-presentation-exploration']}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam accusantium
                        nam repudiandae laboriosam quia suscipit, voluptates totam, atque, numquam quae
                        exercitationem a aperiam libero similique quaerat? Explicabo, autem quas.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam accusantium
                        nam repudiandae laboriosam quia suscipit, voluptates totam, atque, numquam quae
                        exercitationem a aperiam libero similique quaerat? Explicabo, autem quas.
                    </p>
                </div>
            </section>
        </>
    )
}
export default Astronomy;