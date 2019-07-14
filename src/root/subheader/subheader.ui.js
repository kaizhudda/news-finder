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

const timeOptions = [
  { value: 'all_time', label: 'All time' },
  { value: 'last_24h', label: 'Last 24h' },
  { value: 'past_week', label: 'Past week' },
  { value: 'past_month', label: 'Past month' },
  { value: 'past_year', label: 'Past year' }
];

const SubHeader = ({ setTag, setRelevance, setTimeRange }) => {
  const defaultOption = options[0];
  const defaultRevelvanceOptions = relevanceOptions[0];
  const defaultTimeOptions = timeOptions[0];

  const onTagsChange = ({ value }) => {
    console.log('selected dropdown value', value);
    setTag(value);
  };

  const onRelevanceChange = ({ value }) => {
    console.log('relevant option:', value);
    setRelevance(value);
  }

  const onTimeRangeChange = ({ value }) => {
    console.log('onTimeRangeChange option:', value);
    setTimeRange(value);
  }

  return (
    <div className="SubHeader row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="subheader-content">
          <span className="search hide-content">Search</span>
          <Dropdown
            className="tags-dropdown"
            onChange={onTagsChange}
            options={options}
            value={defaultOption}
            placeholder="Select an option" />

          <span className="by-relevance hide-content">by</span>
          <Dropdown
            className="tags-dropdown"
            onChange={onRelevanceChange}
            options={relevanceOptions}
            value={defaultRevelvanceOptions}
            placeholder="Select an option" />

          <span className="by-relevance hide-content">for</span>
          <Dropdown
            className="tags-dropdown"
            onChange={onTimeRangeChange}
            options={timeOptions}
            value={defaultTimeOptions}
            placeholder="Select an option" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader; 
