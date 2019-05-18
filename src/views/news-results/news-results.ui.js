import React, { useEffect } from 'react';

import './news-results.scss';

const NewsResults = ({ loadTest, test }) => {
  useEffect(() => {
    // Load test action
    loadTest();
  })
  return (
    <div>
      <h2>News Results</h2>
      <p>{test}</p>
    </div>
  );
}

export default NewsResults; 
