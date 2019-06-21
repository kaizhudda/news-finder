import React from 'react';
import Routes from '../routes';
import Header from './header';

import './app.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

export default App; 
