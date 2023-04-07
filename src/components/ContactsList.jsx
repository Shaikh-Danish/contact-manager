import ContactCard from './ContactCard'
import { useState, } from 'react'
import { contactsData } from './../data';
import EditModal from './modals/ContactModal'
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
        contactId={contactInfo.contactId}
        contactName={contactInfo.contactName}
        contactNum={contactInfo.contactNum}
        contactInfo={contactInfo}
        closeModal={() => {
          setEditModal(false)
        }} 
        dispatch={dispatch}
        type="editContact" />
    )}
    </>
  )
}

export default ContactsList