import './App.css'
import SearchBar from './components/SearchBar'
import ContactsList from './components/ContactsList';
import { reducer } from './components/reducer.js'
import { contactsData } from './data.js'

import { useReducer, useState } from 'react'
import AddContact from './components/AddContact';

function App() {
  const initialState = {
    contacts: contactsData
  }
  const [searchTerm, setSearchTerm] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)

  const FilteredContacts = state.contacts
        .filter(contact => {
          return contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || contact.phoneNumber.includes(searchTerm)
        })
  
  return (
    <div className='App'>
      <h1 className="header">Address Book Manager</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <ContactsList
        contacts={FilteredContacts}
        dispatch={dispatch} />
      <AddContact
         dispatch={dispatch} />
    </div>
  )
}

export default App


