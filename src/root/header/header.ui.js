import React from 'react';
import DarkModeToggle from '../../shared-components/toggle';
import SearchBar from '../../shared-components/search-bar';

import './header.scss';

const Header = () => {
  return (
    <div className="Header row">
      <div className="col-xs-12">
        <div className="header-content">
          <h1>hacker news</h1>
          <SearchBar />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header; 
