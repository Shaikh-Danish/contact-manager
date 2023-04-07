import Modal from './Modal'
import ContactForm from '../ContactForm'

import { useState } from 'react';

function ContactModal({ contactId = "", contactName = "", contactNum = "", closeModal, dispatch, title, type }) {
    const [name, setName] = useState(contactName);
    const [phnNumber, setPhnNumber] = useState(contactNum);
    const [isValid, setIsValid] = useState(false);
  
    return (
      <Modal>
        <h3>{title} Contact</h3>
        <div className="contact-form">
          <ContactForm 
            name={name}
            setName={setName} 
            phnNumber={phnNumber}
            setPhnNumber={setPhnNumber}
            closeModal={closeModal}
            isValid={isValid}
            setIsValid={setIsValid}
            contactId={contactId}
            dispatch={dispatch}
            type={type} />
        </div>
      </Modal>
    );
  }

export default ContactModal