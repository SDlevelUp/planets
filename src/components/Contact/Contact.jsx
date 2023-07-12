import React from 'react';
import './Contact.css'
import galaxy from '../../assets/galaxynight.jpg';
const Contact = () => {
    return (
        <div className='form'>
            <img src={galaxy} alt="Galaxy night" className='bgform'/>
            <form>
                <h2>Contactez-nous</h2>
                <label>Votre nom</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Objet du message</label>
                <input type='text'></input>
                <label>Message</label>
                <textarea rows='6' placeholder='Votre message ici...' />
                <button className='btn'>Envoyer 🚀 </button>
            </form>
        </div>
    )
};

export default Contact;