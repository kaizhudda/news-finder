import React from 'react';
import Routes from '../routes';
import Header from './header';
import SubHeader from './subheader';

import './app.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Routes />
    </div>
  );
}

export default App; 
