import { IoMdContact } from 'react-icons/io'
import { FaUserEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'

function ContactCard({ contactData: { name, phoneNumber, id }, setDeleteModal, setEditModal, setContactInfo }) {
  
  const setContactId = () => {
    setContactInfo(prev => {
      return { ...prev, contactId: id }
    })
  }
  
  return (

    <div className="contact">
      <div className="contact-header">
        <div className="contact-info">
          <IoMdContact className="contact-icon" />
          <div>
            <p className="contact-name">{name}</p>
          </div>
        </div>
        <div className="contact-edit">
          <IconButton Icon={<FaUserEdit className="icon" />} onClick={() => {
            setEditModal(prev => !prev)
            setContactId()
          }} />
          <IconButton
            Icon={<MdDeleteForever className="icon"/>}
            onClick={() => {
              setDeleteModal(prev => !prev)
              setContactId()
            }} />
        </div>
      </div>
      <div className="contact-details">
        <BsTelephone style={{ fontSize: "1.3rem" }} />
        <p className="contact-number">(+91) {phoneNumber}</p>
      </div>
    </div>

  )
}


function IconButton({ Icon, onClick }) {
   return (
     <button className="btn" onClick={onClick}>
      {Icon}
     </button>
   )
}

export default ContactCard
