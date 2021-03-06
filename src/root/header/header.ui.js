import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import DarkModeToggle from '../../shared-components/toggle';
import SearchBar from '../../shared-components/search-bar';

import './header.scss';

const Header = ({ setQuery, location: { pathname } }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onSearchChange = e => {
    const query = e.target.value;
    // Set Search Term for SearchBar
    setSearchTerm(query);
    debounceSetQuery(query);
  };

  const debounceSetQuery = useCallback(_.debounce(setQuery, 2000), []);

  return (
    <div className="Header row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="header-content">
          <Link to="/" className="app-title">HN.</Link>
          {
            pathname === '/' &&
            <SearchBar onChange={onSearchChange} value={searchTerm} />
          }
          <div className="hide-on-mobile">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
