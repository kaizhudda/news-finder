import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './subheader.scss';

const options = [
  { value: 'story', label: 'Stories', className: 'myOptionClassName' },
  { value: 'comment', label: 'Comments' }
];

const SubHeader = ({ setTag }) => {
  const defaultOption = options[0];

  const onTagsChange = ({ value }) => {
    console.log('selected dropdown value', value);
    setTag(value);
  }; 

  return (
    <div className="SubHeader row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="subheader-content">
          <span className="search">Search</span>
          <Dropdown 
            className="tags-dropdown"
            onChange={onTagsChange}
            options={options}
            value={defaultOption}
            placeholder="Select an option" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader; 
