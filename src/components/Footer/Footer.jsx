import styles from './_Footer.module.scss';
import { FaMapMarked } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer-container"]}>
                <div className={styles["left-part"]}>
                    <div className={styles["location"]}>
                        <FaMapMarked size={20} className={styles["icon"]} />

                        <div>
                            <p>13 Avenue de Paris, 75008 Paris</p>


                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Footer
