import React from 'react';
import styles from './_Contact.module.scss';

import ast from '../../assets/ast.jpg';
const Contact = () => {
    return (
        <div className={styles["form"]}>
            <div className={styles['contact-banner']}>
                <img src={ast} alt="Contact banniere" />
            </div>
            <form>
                <h2>Contactez-nous</h2>
                <label>Nom</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Objet du message</label>
                <input type='text'></input>
                <label>Message</label>
                <textarea rows='6' placeholder='Votre message ici...' />
                <button className={styles["btn"]}>Envoyer 🚀 </button>
            </form>
        </div>
    )
};

export default Contact;