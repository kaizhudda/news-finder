import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './subheader.scss';

const options = [
  { value: 'all', label: 'All' },
  { value: 'stories', label: 'Stories', className: 'myOptionClassName' },
  { value: 'comments', label: 'Comments' }
];

const SubHeader = ({}) => {
  const defaultOption = options[0]

  return (
    <div className="SubHeader row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="subheader-content">
          <p>Search</p>
          <Dropdown 
            className="tags-dropdown"
            options={options}
            value={defaultOption}
            placeholder="Select an option" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader; 
