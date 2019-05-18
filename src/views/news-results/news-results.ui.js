import React, { useEffect } from 'react';

import './news-results.scss';

const NewsResults = ({ loadTest, test }) => {
  useEffect(() => {
    // Load test action
    loadTest();
  })
  return (
    <div className="row center-lg center-md">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        <h2>News Results</h2>
        <p>{test}</p>
      </div>

    </div>
  );
}

export default NewsResults; 
