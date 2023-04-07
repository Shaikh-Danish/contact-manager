import Modal from './Modal'
import { useState } from 'react'

function EditModal({ contactInfo: { contactId, contactName, contactNum }, closeModal, dispatch }) {
    const [editedName, setEditedName] = useState(contactName);
    const [editedNum, setEditedNum] = useState(contactNum);
    const [isValid, setIsValid] = useState(false);
  
    const validateNumberInput = () => {
      const sanitizedInput = editedNum.replace(/\s/g, '');
      return sanitizedInput.length === 10;
    };
  
    const handleChange = (e) => {
      let newValue = e.target.value;
      if (editedNum.length > 9) {
        newValue = e.target.value.slice(0, 10);
      }
      setEditedNum(newValue);
    };
  
    const handleEditSave = () => {
      const isValid = validateNumberInput();
      if (isValid) {
        dispatch({
          type: 'editContact',
          payload: {
            contactNum: editedNum,
            contactName: editedName,
            contactId: contactId,
          },
        });
        closeModal();
      } else {
        setIsValid(false);
      }
    };
  
    return (
      <Modal>
        <h3>Edit Contact</h3>
        <div className="edit-form">
          <label htmlFor="edit-name">Name</label>
          <input
            id="edit-name"
            className="edit-input"
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
  
          <label htmlFor="edit-number">Number</label>
          <input
            type="number"
            id="edit-number"
            className="edit-input"
            value={editedNum}
            onChange={handleChange}
          />
        </div>
        <button className="btn save-edit" onClick={handleEditSave}>
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
      </Modal>
    );
  }

export default EditModal