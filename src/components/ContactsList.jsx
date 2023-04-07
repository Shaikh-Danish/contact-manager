import ContactCard from './ContactCard'
import { useState, } from 'react'
import { contactsData } from './../data';
import EditModal from './modals/EditModal'
import DeleteModal from './modals/DeleteModal'

function ContactsList({ contacts, dispatch }) {
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const [contactInfo, setContactInfo] = useState({
    contactId: null,
    contactNum: "",
    contactName: ""
  })

  return (
    <>
    <div className="contacts">
      {contacts.map(contact => 
      <ContactCard 
        contactData={contact}
        key={contact.id}
        dispatch={dispatch}
        setDeleteModal={setDeleteModal}
        setEditModal={setEditModal}
        setContactInfo={setContactInfo} />
      )}
    </div>

    {deleteModal && (
      <DeleteModal 
        contactId={contactInfo.contactId}
        dispatch={dispatch}
        closeModal={() => {
          setDeleteModal(false)
        }} />
    )}

    {editModal && (
      <EditModal
        contactInfo={contactInfo}
        closeModal={() => {
          setEditModal(false)
        }} 
        dispatch={dispatch}  />
    )}
    </>
  )
}

export default ContactsList