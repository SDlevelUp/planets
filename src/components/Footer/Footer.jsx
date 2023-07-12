import styles from './_Footer.module.scss';
import { FaSearchLocation, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["container"]}>
                <div className={styles["left-part"]}>
                    <div className={styles["location"]}>
                        <FaSearchLocation size={20} className={styles["icon"]} />
                        <div>
                            <p>13 Avenue de Paris</p>
                            <h4>75008 Paris</h4>
                        </div>
                    </div>
                    <div>
                        <h4>
                            <BsTelephoneFill size={20} className={styles["icon"]} />
                            +33 1 23 45 67 89
                        </h4>
                    </div>
                    <div>
                        <h4>
                            <IoMdMail size={20} className={styles["icon"]} />
                            galaxyexplorer@galaxy.com
                        </h4>
                    </div>
                </div>
                <div className={styles["right-part"]}>
                    <h4 className={styles["about-title"]}>A propos de nous</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam"</p>
                    <div className={styles["social-media"]}>
                        <p>Suivez notre aventure, et faites vous aussi parti de Voyage Infini.</p>
                        <FaFacebook size={30} className={styles["social-media-icon"]} />
                        <FaTwitter size={30} className={styles["social-media-icon"]} />
                        <FaLinkedin size={30} className={styles["social-media-icon"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer