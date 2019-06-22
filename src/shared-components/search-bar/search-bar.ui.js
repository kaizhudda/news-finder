import React, { useState } from 'react';

import './search-bar.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <form className="search-container">
      <input 
        value={searchTerm}
        onChange={onSearchChange}
        type="text" 
        id="search-bar" 
        placeholder="Search stories by title" />
      {/* <i class="fas fa-search" /> */}
    </form>
  )
};

export default SearchBar;
