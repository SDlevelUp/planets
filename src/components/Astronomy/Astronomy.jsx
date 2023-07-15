import styles from './_Astronomy.module.scss';
import mars from '../../assets/mars.jpg'
const Astronomy = () => {
    return (
        <>
            <div className={styles['astronomy-banner']}>
                <img src={mars} alt="bannière galerie" />
            </div>
            <div className={styles['astronomy-presentation']}>
                <h1>L'Astronium</h1>
                {/* <p className={styles['p-presentation-solar-system']}>
                    Explorez les mystères fascinants de notre système solaire à travers notre
                    section dédiée à l'astronomie planétaire. Plongez-vous dans l'univers des
                    planètes et découvrez des connaissances captivantes sur ces mondes célestes.
                    Voyagez à travers les différentes planètes, des majestueuses géantes
                    gazeuses aux mystérieuses planètes rocheuses. Admirez leurs paysages uniques,
                    des volcans rugissants aux vastes déserts gelés. Explorez les lunes qui gravitent
                    autour d'elles, révélant des secrets fascinants.
                </p>

                <p className={styles['p-presentation-quiz']}>
                    Immergez-vous dans une animation immersive du système solaire, où vous pourrez
                    observer les orbites des planètes, leur taille comparative et leur position respective.
                    Laissez-vous émerveiller par la complexité et la beauté harmonieuse de notre système céleste.
                    Testez vos connaissances avec notre quiz dédié aux planètes. Mettez-vous au défi de
                    répondre aux questions sur les caractéristiques, les atmosphères et les curiosités de chaque
                    planète. Approfondissez vos connaissances et découvrez de nouvelles informations sur ces
                    mondes lointains.
                </p>

                <p className={styles['p-presentation-exploration']}>
                    Rejoignez-nous dans cette exploration passionnante des planètes et plongez dans l'univers
                    captivant de l'astronomie planétaire. Bienvenue dans notre partie dédiée aux planètes,
                    où vous pourrez découvrir la beauté et les secrets intrigants de ces mondes célestes.
                </p> */}
            </div>
        </>
    )
}

export default Astronomy;
