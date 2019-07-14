import React, { useState } from 'react';
import DarkModeToggle from '../../shared-components/toggle';
import { Link } from 'react-router-dom';
import SearchBar from '../../shared-components/search-bar';

import './header.scss';

const Header = ({ setQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = (e) => {
    const query = e.target.value;
    console.log(query);
    // Set Search Term for SearchBar
    setSearchTerm(query);
    setQuery(query);
  }

  return (
    <div className="Header row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="header-content">
          <h1>HN.</h1>
          <SearchBar onChange={onSearchChange} value={searchTerm} />
          <DarkModeToggle />
          <Link to="/settings"><i class="fas fa-ellipsis-v" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Header; 
