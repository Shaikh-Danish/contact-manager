import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar({ searchTerm, setSearchTerm }) {


    return (
      <div className="search-contact">
        
        <input 
          type="text" 
          className="search-text"
          id="searchInput"
          placeholder="Search by name or mobile number"
          value={searchTerm}
          onChange={setSearchTerm} />
        <button 
          className="search-button"
          type="button"
          id="searchBtn">
            <AiOutlineSearch className="search-icon" />
        </button>
      </div>
    )
  }

export default SearchBar