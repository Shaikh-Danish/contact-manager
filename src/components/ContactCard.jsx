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
          <img
            src=""
            alt=""
            className="contact-icon"
          />
          <div>
            <p className="contact-name">{name}</p>
          </div>
        </div>
        <div className="contact-edit">
          <IconButton icon="edit.png" onClick={() => {
            setEditModal(prev => !prev)
            setContactId()
          }} />
          <IconButton
            icon="delete.png" 
            onClick={() => {
              setDeleteModal(prev => !prev)
              setContactId()
            }} />
        </div>
      </div>
      <div className="contact-details">
        <img src="../img/icons/telephone.png" alt="phone" className="contact-icon" />
        <p className="contact-number">(+91) {phoneNumber}</p>
      </div>
    </div>

  )
}


function IconButton({ icon, onClick }) {
   return (
     <button className="btn" onClick={onClick}>
       {icon}
       <img src={"../img/icons/" + icon} alt="" className="icon" />
     </button>
   )
}

export default ContactCard
