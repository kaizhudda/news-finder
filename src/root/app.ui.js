import React, { useEffect } from 'react';
// import Routes from '../routes';

import './app.scss';

const App = ({ loadTest, test }) => {

  useEffect(() => {
    // Load test action
    loadTest();
  })
  return (
    <div>
      <h2>News Finder</h2>
      <p>{test}</p>
      {/* <Routes /> */}
    </div>
  );
}

export default App; 
