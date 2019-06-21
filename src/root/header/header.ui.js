import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className="Header row center-lg center-md">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        <div className="header-content">
          <h1>Hacker News</h1>
        </div>
      </div>
    </div>
  );
};

export default Header; 