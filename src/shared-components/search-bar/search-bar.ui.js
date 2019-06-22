import React from 'react';

import './search-bar.scss';

const SearchBar = () => {
  return (
    <form class="search-container">
      <input type="text" id="search-bar" placeholder="Search stories by title" />
      <i class="fas fa-search" />
      {/* <a href="#"><i class="search-icon fas fa-search"/></a> */}
    </form>
  )
};

export default SearchBar;
