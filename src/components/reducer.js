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
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload);
            return { ...state, contacts: updatedContacts };
        }
        case "addContact": {
            const length = state.contacts.length;
            const newId = state.contacts[length - 1].id + 1

            const newContact = {
              id: newId,
              name: action.payload.contactName,
              phoneNumber: action.payload.contactNum
            };
          
            // Create a new array with the existing contacts and the new contact
            const newContacts = [...state.contacts, newContact];

            return { ...state, contacts: newContacts };

        }
    } 
}
