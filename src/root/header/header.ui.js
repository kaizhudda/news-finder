import React, { useState } from 'react';
import _ from 'lodash';
import DarkModeToggle from '../../shared-components/toggle';
import SearchBar from '../../shared-components/search-bar';

import './header.scss';

const Header = ({ fetchNewsData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = (value) => {
    console.log(value);
    setSearchTerm(value);
    // _.debounce((fetchNewsData(value), 2000));
    fetchNewsData(value)
  }

  return (
    <div className="Header row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="header-content">
          <h1>hacker news</h1>
          <SearchBar onChange={e => onSearchChange(e.target.value)} value={searchTerm} />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header; 
