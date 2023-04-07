import React from 'react'

function ContactForm({ name, setName, phnNumber, setPhnNumber, closeModal, dispatch, isValid, setIsValid, contactId, type }) {
  
    const validateNumberInput = () => {
        const sanitizedInput = phnNumber.replace(/\s/g, '');
        return sanitizedInput.length === 10;
    }
    
    const handleSave = () => {
        const isValid = validateNumberInput();
        if (isValid) {
            dispatch({
            type: type,
            payload: {
                contactNum: phnNumber,
                contactName: name,
                contactId: contactId,
            },
            });
            closeModal();
        } else {
            setIsValid(false);
        }
    }
    

    const handleChange = (e) => {
        let newValue = e.target.value;
        if (phnNumber.length > 9) {
          newValue = newValue.slice(0, 10);
        }
        setPhnNumber(newValue);
    }
      
    return (
        <>
            <div className='form'>
                <label htmlFor="contact-name">Name</label>
                <input
                    id="contact-name"
                    className="contact-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="contact-number">Number</label>
                <input
                    type="number"
                    id="contact-number"
                    className="contact-input"
                    value={phnNumber}
                    onChange={handleChange}
                />
            </div>
            <button className="btn save-edit" onClick={handleSave}>
            Save
            </button>
            <button className="btn" onClick={closeModal}>
            Cancel
            </button>
            {isValid && (
            <p
                style={{
                color: 'red',
                marginTop: '10px',
                fontSize: '14px',
                }}
            >
                Please enter a 10-digit number without any non-numeric characters.
            </p>
            )}
        </>
  )
}

export default ContactForm