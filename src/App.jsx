import './App.css'
import SearchBar from './components/SearchBar'
import ContactsList from './components/ContactsList';
import { reducer } from './components/reducer.js'
import { contactsData } from './data.js'

import { useReducer, useState } from 'react'

function App() {
  const initialState = {
    contacts: new Set([...contactsData])
  }
  const [searchTerm, setSearchTerm] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)

  const getFilteredContacts = (e) => {
    dispatch({ type: "filterContacts", payload: searchTerm })
    setSearchTerm(e.target.value)
  }
  
  return (
    <div className='App'>
      <h1 className="header">Address Book Manager</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={getFilteredContacts} />
      <ContactsList
        contacts={[...state.contacts]}
        dispatch={dispatch} />
    </div>
  )
}

export default App


