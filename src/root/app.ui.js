import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from '../routes';
import Header from './header';
import SubHeader from './subheader';

import './app.scss';

const App = ({ location: { pathname } }) => {
  return (
    <div className="App">
      <Header />
      {
        pathname === '/' &&
        <SubHeader />
      }
      <Routes />
    </div>
  );
}

export default withRouter(App); 
