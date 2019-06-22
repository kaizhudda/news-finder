import React, { useState } from 'react';
import DarkModeToggle from '../../shared-components/toggle';
import SearchBar from '../../shared-components/search-bar';

import './header.scss';

const Header = ({ fetchNewsData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
    fetchNewsData(e.target.value);
  }

  return (
    <div className="Header row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="header-content">
          <h1>hacker news</h1>
          <SearchBar onChange={onSearchChange} value={searchTerm} />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header; 
