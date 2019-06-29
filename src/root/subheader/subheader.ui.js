import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './subheader.scss';

const options = [
  { value: 'story', label: 'Stories', className: 'myOptionClassName' },
  { value: 'comment', label: 'Comments' }
];

const relevanceOptions = [
  { value: 'search', label: 'Popularity' },
  { value: 'search_by_date', label: 'Date' }
];

const SubHeader = ({ setTag, setRelevance }) => {
  const defaultOption = options[0];
  const defaultRevelvanceOptions = relevanceOptions[0];

  const onTagsChange = ({ value }) => {
    console.log('selected dropdown value', value);
    setTag(value);
  };

  const onRelevanceChange = ({ value }) => {
    console.log('relevant option:', value);
    setRelevance(value);
  }

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

          <span className="by-relevance">By</span>
          <Dropdown
            className="tags-dropdown"
            onChange={onRelevanceChange}
            options={relevanceOptions}
            value={defaultRevelvanceOptions}
            placeholder="Select an option" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader; 
