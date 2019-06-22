import React from 'react';

import './search-bar.scss';

const SearchBar = ({ onChange, value }) => {

  return (
    <form className="search-container">
      <input 
        value={value}
        onChange={onChange}
        type="text" 
        id="search-bar" 
        placeholder="Search stories by title" />
      {/* <i class="fas fa-search" /> */}
    </form>
  )
};

export default SearchBar;
