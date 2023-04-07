import { BsPersonFillAdd } from 'react-icons/bs'
import { useState } from 'react'
import ContactModal from './modals/ContactModal'


function AddContact({ dispatch }) {
  const [addContactModal, setAddContactModal] = useState(false)

  return (
    <>
      <div className="add-contact" role="button" onClick={() => setAddContactModal(true)}>
        <BsPersonFillAdd className="icon" />
      </div>

      {addContactModal && (
        <ContactModal
          dispatch={dispatch}
          title="Add" 
          closeModal={() => {
            setAddContactModal(false)
          }}
          type="addContact" />
      )}
    </>

  )
}

export default AddContact