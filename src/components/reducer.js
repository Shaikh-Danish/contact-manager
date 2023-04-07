export const reducer = (state, action) => {
    switch(action.type) {
        case "editContact": {
            const { contactNum, contactName, contactId } = action.payload

           state.contacts.forEach(contact => {
                if (contact.id === contactId) {
                    contact.name = contactName;
                    contact.phoneNumber = contactNum;
                }
            })
            return {...state }
        }
        case "deleteContact": {
            const updatedContacts = [...state.contacts].filter(contact => contact.id !== action.payload);
            return { ...state, contacts: updatedContacts };
        }
        case "addContact":
            return state;

        case "filterContacts": {
            // console.log(state.contacts)
            const filteredContacts = [...state.contacts].filter(contact => {
                console.log(contact.name.toLowerCase().includes(action.payload.toLowerCase()))
                return contact.name.toLowerCase().includes(action.payload.toLowerCase()) || contact.phoneNumber.includes(action.payload)
            })
            console.log(filteredContacts)
            return { ...state, contacts: filteredContacts }
        }
    } 
}
